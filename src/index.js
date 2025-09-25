import express from "express";
import dotenv from "dotenv";

import router from "./routes/userRoutes.js";
import basketRouter from "./routes/basketRoutes.js";
import pool from "./config/db.js";
import createUserTable from "./data/createUserTable.js";
import createBasketTable from "./data/createBasketTable.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares

createUserTable();
createBasketTable();

app.use(express.json());
app.use("/api", router);
app.use("/api", basketRouter);

// routes


app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
