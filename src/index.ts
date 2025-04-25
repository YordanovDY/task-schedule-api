import expressInit from './config/app-config';
import databaseInit from './config/db-config';

(async () => await databaseInit())();

const app = expressInit();

app.get('/test', (req, res) => {
    res.json({ works: true });
})