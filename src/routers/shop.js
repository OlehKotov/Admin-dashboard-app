import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { authenticate } from '../middlewares/authenticate.js';
import { createProductSchema, createShopSchema, updateProductSchema } from '../validation/shop.js';
import {
  addProductToShopController,
  createShopController,
  deleteProductByIdController,
  getProductByIdController,
  getProductsByShopIdController,
  getShopInfoController,
  updateProductController,
  upsertShopController,
} from '../controllers/shop.js';

const router = Router();

router.use(authenticate);

router.post(
  '/create',
  validateBody(createShopSchema),
  ctrlWrapper(createShopController),
);

router.get('/:shopId', ctrlWrapper(getShopInfoController));
router.put('/:shopId/update', ctrlWrapper(upsertShopController));
router.post(
  '/:shopId/product/add',
  validateBody(createProductSchema),
  ctrlWrapper(addProductToShopController),
);
router.get(
  '/:shopId/product',
  ctrlWrapper(getProductsByShopIdController),
);
router.get(
  '/:shopId/product/:productId',
  ctrlWrapper(getProductByIdController),
);

router.put(
  '/:shopId/product/:productId/edit',
  validateBody(updateProductSchema),
  ctrlWrapper(updateProductController),
);

router.delete(
  '/:shopId/product/:productId/delete',
  ctrlWrapper(deleteProductByIdController),
);


export default router;
