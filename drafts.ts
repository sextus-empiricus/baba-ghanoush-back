import {TradeRecord} from './records/trade.record';
import {UserRecord} from './records/user.record';

const tradeData = {
    currency: 'eth',
    boughtFor: 50,
    amount: 1,
    price: 123,
    boughtIn: new Date(),
    // isActive: false,
    userId: 'ce37dde1-3d9e-4bfc-93bc-e3a9850db877'
}

const userData = {
    name: 'test',
    email: 'a@b.c',
    password: 'test1234',
}

const user = new UserRecord(userData);
const trade = new TradeRecord(tradeData);


(async () => {
    const r = await UserRecord.findUserByNameOrEmail('apple@fru.com');
    console.log(r);
})()