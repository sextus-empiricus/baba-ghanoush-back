import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {globalErrorHandler} from './utils/globalErrorHandler';
import {config} from './config/config';
import {router as authRouter} from './routes/auth.route';
import {router as usersRouter} from './routes/users.route';
import {router as tradesRouter} from './routes/trades.route';
import {protectMiddleware} from './routes/middleware/protect.middleware';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
}))

app.use(cors({
    origin: config.app.corsOrigin,
}));

app.use(json());

app.get('/', async (req, res) => {
    res.send('🍆');
})

app.use('/api/v1/users', protectMiddleware, usersRouter);
app.use('/api/v1/trades', protectMiddleware, tradesRouter);
app.use('/api/v1/auth', authRouter);

app.use(globalErrorHandler);

app.listen(Number(config.app.port), '0.0.0.0', () => {
    console.log(`Listening on http://localhost:${config.app.port}`)
})