import express, {json} from 'express';
import cors from 'cors';
import { battlePost } from './src/controllers/battleController';
import "express-async-errors";
import { errorHandler } from './src/middlewares/battleMiddleware';

const server = express();

server.use(json());
server.use(errorHandler);
server.use(cors());

server.post("/", battlePost)

const PORT = 5000
server.listen(PORT, ()=>{console.log(`rodando na porta : ${PORT}`)})