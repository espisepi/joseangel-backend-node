console.log('hola mundo');

const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());

app.use("/holaMundo", express.static(__dirname + "/public/holaMundo"));
// app.use("/public2", express.static(__dirname + "/public2"));

const PORT = 4000;
app.listen( PORT, () => {
    console.log(`Servidor corriendo en puerto ${ PORT }`);
});