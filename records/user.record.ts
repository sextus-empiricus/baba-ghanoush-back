import {UserEntity} from '../types/User';
import {pool} from '../db/pool';
import {v4 as uuid} from 'uuid';
import {hash} from 'bcrypt';
import {FieldPacket} from 'mysql2';

type DbResult = [UserRecord[], FieldPacket[]];

class UserRecord implements UserEntity {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    isActive: boolean;

    constructor(obj: UserEntity) {
        this.id = obj.id ?? uuid();
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
        this.createdAt = obj.createdAt ?? new Date();
        this.isActive = obj.isActive ?? true;
    }

    //dynamic:
    async insertMe(): Promise<string> {
        const {id, name, email, password, createdAt, isActive} = this;
        await pool.execute(
            `INSERT INTO users (id, name, email, password, createdAt, isActive)
             VALUES (:id, :name, :email, :password, :createdAt, :isActive)`, {
                id,
                name,
                email,
                password: await hash(password, 12),
                createdAt,
                isActive,
            }
        )
        return id;
    }

    //static:
    static async getUserById(id: string): Promise<UserRecord | null> {
        const [resp] = (await pool.execute(
            `SELECT *
             FROM users
             WHERE id = :id`, {id}
        ) as DbResult)[0];

        return resp ? new UserRecord(resp) : null;
    }

    static async removeUserById(id: string): Promise<void> {
        await pool.execute(
            `UPDATE users
             SET isActive = false
             WHERE id = :id`, {id}
        )
    }
}

export {UserRecord};