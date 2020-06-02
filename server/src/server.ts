import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`[Server] Listening at port ${PORT}`);
});
