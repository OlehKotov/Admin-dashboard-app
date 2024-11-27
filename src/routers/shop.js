import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';

import { createShopSchema } from '../validation/shop.js';
import { createShopController } from '../controllers/shop.js';

const router = Router();

router.post(
  '/create',
  validateBody(createShopSchema),
  ctrlWrapper(createShopController),
);

export default router;
