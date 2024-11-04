import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { createSupplierController, getSuppliersController, upsertSupplierController } from "../controllers/suppliers.js";


const router = Router();

router.get('/api/suppliers', ctrlWrapper(getSuppliersController));
router.post('/api/suppliers', ctrlWrapper(createSupplierController));
router.put('/api/suppliers/:supplierId', ctrlWrapper(upsertSupplierController));

export default router;
