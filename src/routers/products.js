import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { createProductController, deleteProductController, getProductsController, upsertProductController } from "../controllers/products.js";


const router = Router();

router.get('/api/products', ctrlWrapper(getProductsController));
router.post('/api/products', ctrlWrapper(createProductController));
router.delete('/api/products/:productId', ctrlWrapper(deleteProductController));
router.put('/api/products/:productId', ctrlWrapper(upsertProductController));


export default router;
