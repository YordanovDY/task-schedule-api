import { Request, Response } from "express";
import taskService from "../services/task-service";
import CreateTaskDto from "../dtos/CreateTask.dto";
import { getValidationError } from "../utils/error-util";
import GetPeriodDto from "../dtos/GetTasks.dto";
import { isValidPeriod } from "../utils/date-util";

export async function createTask(req: Request<{}, {}, CreateTaskDto>, res: Response) {
    const { date, category, priority, description } = req.body

    try {
        if (!date || !category || !priority || !description) {
            res.errors.badRequest('All fields are required!');
            return;
        }

        const result = await taskService.create(date, category, priority, description);
        res.status(201).json(result)

    } catch (err) {
        const validationErrorMsg = getValidationError(err);

        if (validationErrorMsg) {
            res.errors.badRequest(validationErrorMsg);
            return;
        }

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
        res.json(result);

    } catch (err) {
        res.errors.internalServerError();
    }
}