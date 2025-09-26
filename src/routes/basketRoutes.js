import express from "express";
import { createBasketController, deleteBasketController, getAllItemsController, isPurchasedBasketController, updateBasketController } from "../controllers/basketController.js";
const basketRouter = express.Router();

basketRouter.get("/basket", getAllItemsController);
basketRouter.post("/basket", createBasketController);
basketRouter.delete('/basket/delete/:id', deleteBasketController);
basketRouter.patch('/basket/update/:id', updateBasketController);
basketRouter.patch('/basket/itemPurchased/:id', isPurchasedBasketController);

export default basketRouter;