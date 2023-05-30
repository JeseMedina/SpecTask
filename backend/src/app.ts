import express from 'express';
import morgan from 'morgan';
import router from './routes/routes';
import cors from 'cors';

const app = express();

if (process.env.PROD === 'production') {
	app.use(morgan('combined'));
} else {
	app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());
app.use(router);

export default app;
