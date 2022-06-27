import express, {Request, Response} from 'express';
import {TradeRecord} from '../records/trade.record';
import {jsonResponse} from '../utils/jsonResponse';

const router = express.Router();

router
    .get('/:id', async (req: Request, res: Response) => {
        const trades = await TradeRecord.getActiveTradesOfUser(req.params.id);
        res
            .status(200)
            .json(jsonResponse({
                code: 200,
                status: 'success',
                message: `users active trades fetched(${req.params.id})`,
                data: {trades}
            }))
    })

export {
    router,
}