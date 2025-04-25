import { Router } from "express";
import taskRouter from "./routes/task-route";

const routes = Router();

routes.use('/tasks', taskRouter);

export default routes;