import { Status } from "../types/task-type";

export interface UpdateStatusDto {
    status: Status,
}

export interface UpdateStatusParams {
    taskId: string
}