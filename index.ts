import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {globalErrorHandler} from './utils/globalErrorHandler';
import {config} from './config/config';
import {router as authRouter} from './routes/auth.route';
import {router as usersRouter} from './routes/users.route';
import {router as tradesRouter} from './routes/trades.route';

const port = config.app.port || 3001;

const app = express();

app.use(cors({
    origin: config.app.corsOrigin,
}));

app.use(json());

app.get('/', async (req, res) => {
    res.send('🍆');
})

app.use('/api/v1/users', usersRouter); //@TODO - have to be protected;
app.use('/api/v1/trades', tradesRouter);
app.use('/api/v1/auth', authRouter);



app.use(globalErrorHandler);

app.listen(Number(port), '0.0.0.0', () => {
    console.log(`Listening on http://localhost:${port}`)
})