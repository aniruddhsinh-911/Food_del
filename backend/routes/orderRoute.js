import express from "express"
import authMiddleare from "../middleware/auth.js"
import { placeOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleare,placeOrder);


export default orderRouter;