import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {globalErrorHandler, ValidationError} from './utils/globalErrorHandler';

const port = process.env.PORT || 3001;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(json());


app.get('/', async (req, res) => {
    res.send('🍆');
})

app.use(globalErrorHandler);

app.listen(Number(port), '0.0.0.0', () => {
    console.log(`Listening on http://localhost:${port}`)
})