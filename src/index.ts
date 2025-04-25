import expressInit from './config/app-config';


const app = expressInit();

app.get('/test', (req, res) => {
    res.json({ works: true });
})