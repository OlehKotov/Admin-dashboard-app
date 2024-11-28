import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { authenticate } from '../middlewares/authenticate.js';
import { createShopSchema } from '../validation/shop.js';
import {
  createShopController,
  getShopInfoController,
} from '../controllers/shop.js';

const router = Router();

router.use(authenticate);

router.post(
  '/create',
  validateBody(createShopSchema),
  ctrlWrapper(createShopController),
);

router.get('/:shopId', ctrlWrapper(getShopInfoController));

export default router;
