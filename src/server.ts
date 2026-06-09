import express from "express";
import { config } from "dotenv";
import connectDB from "./config/config.js";
import setRoutes from "./router/setRoutes.js";
import partRoutes from "./router/partRoutes.js";
import inventoryRoutes from "./router/inventoryRoutes.js";
import inventoryPartRoutes from "./router/inventoryPartRoutes.js";
import colorRoutes from './router/colorRoute.js'
import themeRoutes from './router/themeRoute.js'
import promptRouter from './router/promptRouter.js'
import cors from "cors";

config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/sets", setRoutes);
app.use("/parts", partRoutes);
app.use("/inventories", inventoryRoutes);
app.use("/inventoryPart", inventoryPartRoutes);
app.use('/color', colorRoutes)
app.use('/theme', themeRoutes)
app.use('/prompt', promptRouter)

const port = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log("Server running k on port ", port);
  });
};

startServer();
