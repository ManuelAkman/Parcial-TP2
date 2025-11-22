import express from 'express';
import morgan from 'morgan';
import creditCardRouter from './routers/creditCardRouter.js';
import creditCardAdminRouter from './routers/creditCardAdminRouter.js';
import adminRouter from './routers/admin.router.js';

const morgarnModule = morgan(':method :url :status :res[content-length] - :response-time ms');

const server = express();

server.use(express.json());
server.use(morgarnModule);
server.use(creditCardRouter);
server.use(creditCardAdminRouter);
server.use(adminRouter);

export default server;
