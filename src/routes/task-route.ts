import { Router } from "express";
import { createTask, getMonthlyTasks } from "../controllers/task-controller";

const taskRouter = Router();

taskRouter.post('/', createTask);
taskRouter.get('/monthly', getMonthlyTasks);

export default taskRouter;