import express from "express";
import cors from "cors";
import morgan from "morgan";
import sawwerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { options } from "./swaggerOptions";

const specs = sawwerJSDoc(options);
import taskRoutes from "./routes/tasks";
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(taskRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
export default app;
