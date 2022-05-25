import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';

const port = process.env.PORT || 3001;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(json());


app.get('/', (req, res) => {
    res.send('🍆');
})


app.listen(Number(port), '0.0.0.0', () => {
    console.log(`Listening on http://localhost:${port}`)
})