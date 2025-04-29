import { Router } from "express";
import { createTask, getMonthlyTasks } from "../controllers/task-controller";

const taskRouter = Router();

taskRouter.post('/', createTask);
taskRouter.get('/month/:period', getMonthlyTasks);

export default taskRouter;