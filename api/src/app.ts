import express from 'express';
import morgan from 'morgan';
import router from './routes/routes';
import cors from 'cors';
import path from 'path';

const app = express();

if (process.env.PROD === 'production') {
	app.use(morgan('combined'));
} else {
	app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

export default app;
