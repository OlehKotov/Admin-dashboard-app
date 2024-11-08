import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { createProductController, deleteProductController, getProductsController, upsertProductController } from "../controllers/products.js";
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getProductsController));
router.post('/', ctrlWrapper(createProductController));
router.delete('/:productId', ctrlWrapper(deleteProductController));
router.put('/:productId', ctrlWrapper(upsertProductController));


export default router;
