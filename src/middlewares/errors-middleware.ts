import { Request, Response, NextFunction } from 'express';

export function errorsMiddleware(req: Request, res: Response, next: NextFunction) {
    res.errors = {
        internalServerError: (message = 'Internal Server Error') => {
            res.status(500).json({ status: 500, message });
        },
        badRequest: (message = 'Bad Request') => {
            res.status(400).json({ status: 400, message });
        }
    }

    next();
}