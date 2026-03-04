import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import usersRouter from './src/routes/user';
import gamesRouter from './src/routes/games';
import sessionsRouter from './src/routes/session';
import statsRouter from './src/routes/stats';

dotenv.config();
export const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/users', usersRouter);
app.use('/games', gamesRouter);
app.use('/sessions', sessionsRouter);
app.use('/stats', statsRouter);




const port = process.env.PORT || 4004;

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
