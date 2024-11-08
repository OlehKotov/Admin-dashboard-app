import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getOrdersController } from "../controllers/orders.js";
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getOrdersController));


export default router;
