import express, { Application } from 'express';
import { errorsMiddleware } from '../middlewares/errors-middleware';
import cors from 'cors';

export default function expressInit(): Application {
    const PORT = 3000;
    const app = express();

    app.use(express.json());
    app.use(errorsMiddleware);
    app.use(cors());

    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    return app;
}