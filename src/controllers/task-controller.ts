import { Request, Response } from "express";
import taskService from "../services/task-service";
import CreateTaskDto from "../dtos/CreateTask.dto";
import { getValidationError } from "../utils/error-util";
import GetPeriodDto from "../dtos/GetTasks.dto";
import { isValidPeriod } from "../utils/date-util";
import throttlingUtil from "../utils/throttling-util";
import { UpdateStatusDto, UpdateStatusParams } from "../dtos/UpdateStatus.dto";
import { DeleteTask } from "../dtos/DeleteTask.dto";

export async function createTask(req: Request<{}, {}, CreateTaskDto>, res: Response) {
    const { date, category, priority, description } = req.body

    try {
        if (!date || !category || !priority || !description) {
            res.errors.badRequest('All fields are required!');
            return;
        }

        const result = await taskService.create(date, category, priority, description);
        await throttlingUtil();     // ! TESTING
        res.status(201).json(result)

    } catch (err) {
        const validationErrorMsg = getValidationError(err);

        if (validationErrorMsg) {
            console.error(err);
            res.errors.badRequest(validationErrorMsg);
            return;
        }

        console.error(err);
        res.errors.internalServerError();
    }
}

export async function getMonthlyTasks(req: Request<GetPeriodDto>, res: Response) {
    const { period } = req.params;  // 2025-05
    const isValid = isValidPeriod(period);

    if (!isValid) {
        res.errors.badRequest('Invalid period!');
        return;
    }

    const [year, month] = period.split('-');

    try {
        const result = await taskService.getTasks(Number(year), Number(month));
        await throttlingUtil();     // ! TESTING
        res.json(result);

    } catch (err) {
        res.errors.internalServerError();
    }
}

export async function updateStatus(req: Request<UpdateStatusParams, {}, UpdateStatusDto>, res: Response) {
    const { status } = req.body;
    const { taskId } = req.params;

    try {
        const result = await taskService.uStatus(taskId, status);
        await throttlingUtil();     // ! TESTING
        res.json(result);

    } catch (err) {
        const validationErrorMsg = getValidationError(err);

        if (validationErrorMsg) {
            console.error(validationErrorMsg);
            res.errors.badRequest(validationErrorMsg);
            return;
        }

        console.error(err);
        res.errors.internalServerError();
    }
}

export async function deleteTask(req: Request<DeleteTask>, res: Response) {
    const { taskId } = req.params;

    try {
        const result = await taskService.del(taskId);
        await throttlingUtil();     // ! TESTING
        res.json(result);

    } catch (err) {
        const validationErrorMsg = getValidationError(err);

        if (validationErrorMsg) {
            console.error(validationErrorMsg);
            res.errors.badRequest(validationErrorMsg);
            return;
        }

        console.error(err);
        res.errors.internalServerError();
    }
}