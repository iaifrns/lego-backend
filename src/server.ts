import express from "express";
import { config } from "dotenv";
import connectDB from "./config/config.js";
import setRoutes from "./router/setRoutes.js";
import partRoutes from "./router/partRoutes.js";
import inventoryRoutes from "./router/inventoryRoutes.js";
import inventoryPartRoutes from "./router/inventoryPartRoutes.js";
import cors from "cors";

config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/sets", setRoutes);
app.use("/parts", partRoutes);
app.use("/inventories", inventoryRoutes);
app.use("/inventoryPart", inventoryPartRoutes);

const port = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log("Server running k on port ", port);
  });
};

startServer();
