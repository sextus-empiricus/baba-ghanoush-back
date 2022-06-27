import express, {Request, Response} from 'express';
import {UserRecord} from '../records/user.record';
import {jsonResponse} from '../utils/jsonResponse';
import {ValidationError} from '../utils/globalErrorHandler';

const router = express.Router();

router
    .get('/:id', async (req: Request, res: Response) => {
        const user = await UserRecord.getUserById(req.params.id);
        if (!user) throw new ValidationError(ValidationError.messages.fetch.notFound, 404)
        res
            .status(200)
            .json(jsonResponse({
                code: 200,
                status: 'success',
                message: `user fetched(${user.id})`,
                data: {user}
            }));
    })

    .delete('/:id', async (req: Request, res: Response) => {
        const user = await UserRecord.getUserById(req.params.id);
        if (!user) throw new ValidationError(ValidationError.messages.fetch.notFound, 404)
        await UserRecord.removeUserById(req.params.id);
        res
            .status(200)
            .json(jsonResponse({
                code: 200,
                status: 'success',
                message: `user deactivated(${user.id})`,
                data: {user}
            }));
    })

export {
    router
}