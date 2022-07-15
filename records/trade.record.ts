import {TradeEntity} from '../types';
import {v4 as uuid} from 'uuid'
import {pool} from '../db/pool';
import {FieldPacket} from 'mysql2';

type DbResult = [TradeRecord[], FieldPacket[]];

class TradeRecord implements TradeEntity {
    id: string;
    currency: string;
    boughtFor: number;
    amount: number;
    price: number;
    boughtIn?: Date;
    isActive: boolean;
    userId: string
    profit?: number
    soldIn?: Date;

    constructor(obj: TradeEntity) {
        this.id = obj.id ?? uuid();
        this.currency = obj.currency;
        this.boughtFor = obj.boughtFor;
        this.amount = obj.amount;
        this.price = obj.price;
        this.boughtIn = obj.boughtIn ?? new Date();
        this.isActive = obj.isActive ?? true;
        this.userId = obj.userId;
        this.soldIn = obj.soldIn ?? null;
        this.profit = obj.profit ?? null;
    }

    //dynamic:
    async insertMe() {
        const {id, currency, boughtFor, amount, price, boughtIn, userId} = this;
        await pool.execute(
            `INSERT INTO trades (id, currency, boughtFor, amount, price, boughtIn, userId)
             VALUES (:id, :currency, :boughtFor, :amount, :price, :boughtIn, :userId)`, {
                id,
                currency,
                boughtFor,
                amount,
                price,
                boughtIn,
                userId
            }
        )
        return id;
    }

    //static:
    static async getAll(): Promise<TradeRecord[]> {
        const [resp] = await pool.execute(
            `SELECT *
             FROM trades`);
        return (resp as DbResult).map((el: any) => new TradeRecord(el)) ?? null;
    }


    static async getAllTradesOfUser(userId: string): Promise<TradeRecord[]> {
        const [resp] = await pool.execute(
            `SELECT *
             FROM trades
             WHERE userId = :userId
             ORDER BY boughtIn
            `, {
                userId,
            });
        return (resp as DbResult).map((el: any) => new TradeRecord(el)) ?? null;
    }

    static async getFilteredTradesOfUser(userId: string, dateFrom?: string, dateTo?: string, showHistory?: boolean): Promise<TradeRecord[]> {
        const [resp] = await pool.execute(
            `SELECT *
             FROM trades
             WHERE userId = :userId
               AND trades.isActive = :showHistory
               AND CAST(trades.boughtIn AS DATE) BETWEEN :dateFrom AND :dateTo
             ORDER BY boughtIn
            `, {
                userId,
                showHistory,
                dateFrom: dateFrom ?? '1900-01-01',
                dateTo: dateTo ?? '2100-01-01'
            });
        return (resp as DbResult).map((el: any) => new TradeRecord(el)) ?? null;
    }

    static async getTradeById(id: string): Promise<TradeRecord | null> {
        const [resp] = (await pool.execute(
            `SELECT *
             FROM trades
             WHERE id = :id`, {id}
        ) as DbResult)[0];

        return resp ? new TradeRecord(resp) : null;
    }

    static async cashTradeById(id: string, soldIn: Date, profit: number): Promise<void> {
        await pool.execute(
            `UPDATE trades
             SET isActive = false,
                 soldIn   = :soldIn,
                 profit   = :profit
             WHERE id = :id`, {id, soldIn, profit}
        )
    }

    static async deleteTradeById(id: string): Promise<void> {
        await pool.execute(
            `DELETE
             FROM trades
             WHERE id = :id`, {id}
        )
    }
}

export {
    TradeRecord,
}