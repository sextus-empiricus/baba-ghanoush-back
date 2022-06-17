import {UserRecord} from './records/user.record';
import {compare} from 'bcrypt';

const data = {
    name: 'Marcus',
    email: 'a@b.c',
    password: 'test1234',
}

const user = new UserRecord(data);

(async () => {
    // await user.insertMe();
    await UserRecord.removeUserById('id_1234_apple');
})()