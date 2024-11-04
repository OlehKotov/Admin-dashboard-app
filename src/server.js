
import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from "dotenv";
import { env } from './utils/env.js';
import customersRouter from './routers/customers.js';
import ordersRouter from './routers/orders.js';
import productsRouter from './routers/products.js';
import suppliersRouter from './routers/suppliers.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const PORT = Number(env('PORT', '3000'));


export const startServer = () => {
  const app = express();

  app.use(express.json({
    type: ['application/json', 'application/vnd.api+json'],
    limit: '100kb',
  }))

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(customersRouter);
  app.use(ordersRouter);
  app.use(productsRouter);
  app.use(suppliersRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
