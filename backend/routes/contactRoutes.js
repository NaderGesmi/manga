import express  from "express"
import { getContact,InsertContact } from "../controllers/contactControllers.js"
const router = express.Router()
router.get("/",getContact)
router.post("/insertc",InsertContact)
export default router;