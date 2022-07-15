import express, {Request, Response} from 'express';
import {TradeRecord} from '../records/trade.record';
import {jsonResponse} from '../utils/jsonResponse';

const router = express.Router();

router
    .get('/:id', async (req: Request, res: Response) => {
        const {dateFrom, dateTo} = req.query;
        const history = req.query.history !== '1';
        const trades = await TradeRecord.getFilteredTradesOfUser(req.params.id, dateFrom as string, dateTo as string, history);
        res
            .status(200)
            .json(jsonResponse({
                code: 200,
                status: 'success',
                message: `users filtered trades fetched(${req.params.id})`,
                data: {trades}
            }))
    })

    .get('/all/:id', async (req: Request, res: Response) => {
        const trades = await TradeRecord.getAllTradesOfUser(req.params.id);
        res
            .status(200)
            .json(jsonResponse({
                code: 200,
                status: 'success',
                message: `users all trades fetched(${req.params.id})`,
                data: {trades}
            }))
    })

    .post('/', async (req: Request, res: Response) => {
        const {boughtIn, currency, boughtFor, amount, price, userId} = req.body;
        const newTrade = new TradeRecord({boughtIn, currency, boughtFor, amount, price, userId});
        await newTrade.insertMe();
        res
            .status(201)
            .json(jsonResponse({
                code: 201,
                status: 'success',
                message: `new trade created(${newTrade.id})`,
            }));
    })
    .patch('/:id', async (req: Request, res: Response) => {
        const {soldIn, profit} = req.body;
        await TradeRecord.cashTradeById(req.params.id, soldIn, profit);
        res
            .status(200)
            .json(jsonResponse({
                code: 200,
                status: 'success',
                message: `trade successfully cashed(${req.params.id})`
            }))
    })
    .delete('/:id', async (req: Request, res: Response) => {
        await TradeRecord.deleteTradeById(req.params.id);
        res
            .status(200)
            .json(jsonResponse({
                code: 200,
                status: 'success',
                message: `trade successfully deleted(${req.params.id})`
            }))
    })

export {
    router,
}