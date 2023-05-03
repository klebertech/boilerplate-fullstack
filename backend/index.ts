import express, { Request, Response } from 'express';

const PORT = 3001;
const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

app.listen(PORT, () => {
  console.log('Server running on port 3000');
});