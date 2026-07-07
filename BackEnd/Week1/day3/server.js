import express from 'express';
import cors from 'cors';
import route from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

const port = 2000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});