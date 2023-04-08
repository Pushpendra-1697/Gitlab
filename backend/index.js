const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const { connection } = require('./Configs/Config');

//Inbuilt middlewares;
app.use(cors());
app.use(express.json());
app.use(express.text());

app.get('/', async (req, res) => {
    res.send('Welcome in Adobe');
});


app.listen(PORT, async () => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (err) {
        console.log('Error in connection to DB');
    }
    console.log(`Server is listening on ${PORT}`);
});