//importaciones en node
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');


//crear el servidor de express
const app = express();

//cors
app.use(cors());

//Database 
dbConnection();

//console.log(process.env)


//Rutas
app.get( '/', (req, res)=>{
    res.json({
        ok:true,
        msg: 'hola mundo'
    });
} );


app.listen( process.env.PORT, () => {
    console.log('Servidor Corriendo en Puerto 4000');
} );