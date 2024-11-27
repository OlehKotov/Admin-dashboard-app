import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { authenticate } from '../middlewares/authenticate.js';
import { getNearestController } from "../controllers/nearest.js";

const router = Router();

router.use(authenticate);

router.get('/nearest', ctrlWrapper(getNearestController));


export default router;
