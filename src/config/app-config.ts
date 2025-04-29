import express, { Application } from 'express';
import { errorsMiddleware } from '../middlewares/errors-middleware';

export default function expressInit(): Application {
    const PORT = 3000;
    const app = express();

    app.use(express.json());
    app.use(errorsMiddleware);

    // TODO: Allow CORS Requests

    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    return app;
}