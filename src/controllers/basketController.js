import { getAllItemsService } from "../services/basketService.js";
import { createBasketService, deleteBasketService, updateBasketService } from "../services/basketService.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({ status, message, data });
};

export const createBasketController = async (req, res) => {
    const newItem =  await createBasketService(req.body);
    handleResponse(res, 200 , 'Item created successfully', newItem);
}
export const getAllItemsController = async (req, res) => {
  const records = await getAllItemsService();
    handleResponse(res, 200 , 'Items retreived successfully', records);
}
export const deleteBasketController = async (req, res) => {
  await deleteBasketService(req.params.id);
    handleResponse(res, 200 , 'Item deleted successfully');
}
export const updateBasketController = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const updatedItem = await updateBasketService({id, name, quantity});
    handleResponse(res, 200 , 'Item updated successfully', updatedItem);
}