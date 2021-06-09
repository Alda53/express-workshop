/* este archivo solicitará los demás para su función final
express aquí es una clase, require busca una dependencia instalada, no necesita ruta */
const bodyParser = require('body-parser')
const morgan = require('morgan')
const express = require('express')
const app = express()
const pokemon = require('./routes/pokemon')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded(({ extended: true })))

//req almacena la info del URL, res respuesta que damos, next 
app.get("/",(req, res, next) => {
    //código que indica q todo se ejecutó bien
    return res.status(200).send("Bienvenido a la Pokedex")
});
app.use("/pokemon", pokemon)
/* Montamos un servidor

Necesita un puerto, funcion que ejecuta
Flecha indica que la funicon no tiene nombre */
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...")
});