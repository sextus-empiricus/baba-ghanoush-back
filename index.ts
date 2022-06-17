import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {globalErrorHandler} from './utils/globalErrorHandler';
import {config} from './config/config';

const port = config.app.port || 3001;

const app = express();

app.use(cors({
    origin: config.app.corsOrigin,
}));

app.use(json());

app.get('/', async (req, res) => {
    res.send('🍆');
})

app.use(globalErrorHandler);

app.listen(Number(port), '0.0.0.0', () => {
    console.log(`Listening on http://localhost:${port}`)
})