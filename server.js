const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));

app.use((req, res, next) => {
    // Cache  10 minutos (em segundos)
    const cacheTime = 600;
    res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);
    res.setHeader('Expires', new Date(Date.now() + cacheTime * 1000).toUTCString());
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000');
});
