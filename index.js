const express = require('express');
const app = express();
const mysql = require('mysql');

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.listen(8080, () => {
    console.log(`server running on port ${PORT}`);
})