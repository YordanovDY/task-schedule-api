import { Router } from "express";
import { createTask, getMonthlyTasks, updateStatus } from "../controllers/task-controller";

const taskRouter = Router();

taskRouter.get('/month/:period', getMonthlyTasks);
taskRouter.post('/', createTask);

taskRouter.put('/status/:taskId', updateStatus);
// taskRouter.put('/data/:taskId');

// taskRouter.delete('/:taskId');

export default taskRouter;