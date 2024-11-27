import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { authenticate } from '../middlewares/authenticate.js';
import { getReviewsController } from "../controllers/reviews.js";

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getReviewsController));


export default router;
