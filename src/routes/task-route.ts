import { Router } from "express";
import { createTask, getDailyTasks, getMonthlyTasks } from "../controllers/task-controller";

const taskRouter = Router();

taskRouter.post('/', createTask);
export default taskRouter;