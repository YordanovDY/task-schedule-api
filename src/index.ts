import express from 'express';

const PORT = 3000;

const app = express();

app.get('/test', (req, res) => {
    res.json({ works: true });
})

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));