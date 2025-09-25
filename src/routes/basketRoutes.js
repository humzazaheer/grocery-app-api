import express from "express";
import { createBasketController, deleteBasketController, getAllItemsController, updateBasketController } from "../controllers/basketController.js";
const basketRouter = express.Router();

basketRouter.get("/basket", getAllItemsController);
basketRouter.post("/basket", createBasketController);
basketRouter.delete('/basket/delete/:id', deleteBasketController);
basketRouter.patch('/basket/update/:id', updateBasketController);
export default basketRouter;