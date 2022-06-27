import express, {Request, Response} from 'express';
import {UserRecord} from '../records/user.record';
import {jsonResponse} from '../utils/jsonResponse';
import {ValidationService} from '../services/validation.service';
import jwt from 'jsonwebtoken';
import {config} from '../config/config';

const router = express.Router();

router
    .post('/sign-up', async (req: Request, res: Response) => {
        const {name, email, password} = req.body;
        await ValidationService.signUpDataValidation(name, email, password);
        const newUser = new UserRecord({name, email, password});
        await newUser.insertMe();
        const jwtToken = jwt.sign({id: newUser.id}, config.jwt.privateKey, {expiresIn: '1h'});
        res
            .status(201)
            .json(jsonResponse({
                code: 201,
                status: 'success',
                message: `new user created(${newUser.id})`,
                data: {jwtToken}
            }));
    })

    .post('/sign-in', async (req: Request, res: Response) => {
        const {email, password} = req.body;
        const userId = await ValidationService.singInValidation(email, password);
        const jwtToken = jwt.sign({id: userId}, config.jwt.privateKey, {expiresIn: '1h'});
        res
            .status(200)
            .json(jsonResponse({
                code: 200,
                status: 'success',
                message: `user logged in(${userId})`,
                data: {jwtToken}
            }))
    })

export {
    router,
}