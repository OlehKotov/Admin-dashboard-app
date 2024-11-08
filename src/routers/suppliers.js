import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { createSupplierController, getSuppliersController, upsertSupplierController } from "../controllers/suppliers.js";
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getSuppliersController));
router.post('/', ctrlWrapper(createSupplierController));
router.put('/:supplierId', ctrlWrapper(upsertSupplierController));

export default router;
