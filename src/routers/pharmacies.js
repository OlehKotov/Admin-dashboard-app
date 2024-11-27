import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { authenticate } from '../middlewares/authenticate.js';
import { getPharmaciesController } from "../controllers/pharmacies.js";

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getPharmaciesController));


export default router;
