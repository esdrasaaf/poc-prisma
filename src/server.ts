import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

//Routes
import moviesRouters from './routes/moviesRouters.js';

//Test
app.get("/health", (req: Request, res: Response) => { res.send("E O PACKAGE.JSON???") });

// Configs
app.use(cors());
app.use(express.json());
app.use(moviesRouters);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running in port ${port}`));