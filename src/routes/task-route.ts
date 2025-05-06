import { Router } from "express";
import { createTask, deleteTask, getMonthlyTasks, updateStatus } from "../controllers/task-controller";

const taskRouter = Router();

taskRouter.get('/month/:period', getMonthlyTasks);
taskRouter.post('/', createTask);

taskRouter.put('/status/:taskId', updateStatus);
taskRouter.delete('/:taskId', deleteTask);

export default taskRouter;