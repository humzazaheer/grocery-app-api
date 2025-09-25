import express from "express";
import { createUserController, deleteUserController, updateUserController } from "../controllers/userController.js";
const router = express.Router();

router.get("/users", (req, res)=> {
   res.json({ message: "User route" });
});

router.post("/users", createUserController);
router.delete('/users/delete/:id', deleteUserController);
router.put('/users/update/:id', updateUserController);
export default router;