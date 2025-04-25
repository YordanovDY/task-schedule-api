import { Router } from "express";
import { createTask, getDailyTasks, getMonthlyTasks } from "../controllers/task-controller";

const taskRouter = Router();

taskRouter.post('/', createTask);
taskRouter.get('/daily', getDailyTasks);
taskRouter.get('/monthly', getMonthlyTasks);

export default taskRouter;