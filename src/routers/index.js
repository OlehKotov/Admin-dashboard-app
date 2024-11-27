import { Router } from 'express';
import authRouter from './auth.js';
import customersRouter from './customers.js';
import ordersRouter from './orders.js';
import productsRouter from './products.js';
import suppliersRouter from './suppliers.js';
import dashboardRoutes from './dashboard.js';
import nearestRoutes from './nearest.js';
import reviewsRoutes from './reviews.js';
import pharmaciesRoutes from './pharmacies.js';
import shopRoutes from './shop.js';

const router = Router();

router.use('/api/user', authRouter);
router.use('/api/customers', customersRouter);
router.use('/api/orders', ordersRouter);
router.use('/api/products', productsRouter);
router.use('/api/suppliers', suppliersRouter);
router.use('/api', dashboardRoutes);
router.use('/api/stores', nearestRoutes);
router.use('/api/customer-reviews', reviewsRoutes);
router.use('/api/stores', pharmaciesRoutes);
router.use('/api/shop', shopRoutes);

export default router;
