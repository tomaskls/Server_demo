import express from 'express';

const app = express();
const port = 5114;

app.get('/', (req, res) => {
    console.log('GET: home page');
    
});

app.listen(port, () => {
    console.log(`Serveris sukasi ant http://localhost:${port}`);
    
}) ;
