const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 8080;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.use('/students', studentRoutes);

app.listen(8080, () => {
    console.log(`server running on port ${PORT}`);
})