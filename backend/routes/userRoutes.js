import express  from "express"
import { getOne } from "../controllers/userControllers.js";
const router = express.Router()
router.get("/",getOne)

export default router;