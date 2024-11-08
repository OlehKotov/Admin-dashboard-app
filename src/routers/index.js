import { Router } from 'express';
import authRouter from './auth.js';
import customersRouter from './customers.js';
import ordersRouter from './orders.js';
import productsRouter from './products.js';
import suppliersRouter from './suppliers.js';
import dashboardRoutes from './dashboard.js';

const router = Router();

router.use('/api/user', authRouter);
router.use('/api/customers', customersRouter);
router.use('/api/orders', ordersRouter);
router.use('/api/products', productsRouter);
router.use('/api/suppliers', suppliersRouter);
router.use('/api', dashboardRoutes);

export default router;
