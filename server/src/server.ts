import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    hello: 'world',
  });
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`[Server] Listening at port ${PORT}`);
});