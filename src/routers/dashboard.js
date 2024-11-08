import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { authenticate } from '../middlewares/authenticate.js';
import { getDashboardInfoController } from "../controllers/dashboard.js";

const router = Router();

router.use(authenticate);

router.get('/dashboard', ctrlWrapper(getDashboardInfoController));

export default router;
