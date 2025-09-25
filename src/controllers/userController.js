import { createUserService, deleteUserService, updateUserService } from "../services/userService.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({ status, message, data });
};

export const createUserController = async (req, res) => {
    const newUser =  await createUserService(req.body);
    handleResponse(res, 200 , 'User created successfully', newUser);
}
export const deleteUserController = async (req, res) => {
  await deleteUserService(req.params.id);
    handleResponse(res, 200 , 'User deleted successfully');
}
export const updateUserController = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updatedUser = await updateUserService({id, name, email});
    handleResponse(res, 200 , 'User updated successfully', updatedUser);
}