import express  from "express"
import  {getAll,getOne,Update,Delete,Insert}  from "../controllers/bookController.js"
import { verifyToken } from "../middleware/token.js"
const router = express.Router()
router.get("/",verifyToken,getAll)
router.get("/:bookid",getOne)
router.patch("/update/",Update)
router.delete("/:bookid",Delete)
router.post("/",Insert)
export default router;