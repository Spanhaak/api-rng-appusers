//
// Random user number generator between sets of numbers
// by Marco Spanhaak
// Code is to test/proof a use-case
//
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hoi Mark!");    
});

app.get('/usercount', (req, res) => {
    const calcusers = Math.floor((Math.random() * 40) + 60);
    const convert = `${calcusers}`;
    res.send(convert);    
});

app.get('/floatingcount', (req, res) => {
    const calcusers = Math.floor((Math.random() * 40) + 20);
    const convert = `${calcusers}`;
    res.send(convert);    
});

app.get('/fixedcount', (req, res) => {
    const calcusers = Math.floor((Math.random() * 20) + 10);
    const convert = `${calcusers}`;
    res.send(convert);    
});

const server = app.listen(process.env.PORT || 8080, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log (`random user number generator at http://${host}:${port}`);
});