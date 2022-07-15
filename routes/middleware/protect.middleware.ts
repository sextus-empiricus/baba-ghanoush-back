import {NextFunction, Request, Response} from 'express';
import {ValidationError} from '../../utils/globalErrorHandler';
import jwt from 'jsonwebtoken';
import {config} from '../../config/config';

const protectMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('X-Auth-Token');
    if (!token) throw new ValidationError(ValidationError.messages.auth.notAuthorised, 401);
    try {
        await jwt.verify(token, config.jwt.privateKey);
        next();
    } catch (err) {
        throw new ValidationError(ValidationError.messages.auth.notAuthorised, 401);
    }
}
export {
    protectMiddleware,
}