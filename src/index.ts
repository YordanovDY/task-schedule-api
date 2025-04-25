import expressInit from './config/app-config';
import databaseInit from './config/db-config';
import routes from './routes';

(async () => await databaseInit())();

const app = expressInit();

app.use(routes);