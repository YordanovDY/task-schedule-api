import express, { Application } from 'express';

export default function expressInit(): Application {
    const PORT = 3000;
    const app = express();

    app.use(express.json());

    // TODO: Allow CORS Requests

    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
    return app;
}