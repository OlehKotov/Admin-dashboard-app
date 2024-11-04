import { Router } from "express";
import { getCustomerByIdController, getCustomersController } from "../controllers/customers.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get('/api/customers', ctrlWrapper(getCustomersController));
router.get('/api/customers/:customerId', ctrlWrapper(getCustomerByIdController));


export default router;
