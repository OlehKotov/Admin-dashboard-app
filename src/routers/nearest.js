import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { authenticate } from '../middlewares/authenticate.js';
import { getNearestFarmaciesController } from "../controllers/nearest.js";

const router = Router();

router.use(authenticate);

router.get('/nearest', ctrlWrapper(getNearestFarmaciesController));


export default router;
