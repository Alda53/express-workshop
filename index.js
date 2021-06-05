//este archivo solicitará los demás para su función final
//express aquí es uma clase, require busca una dependencia instalada, no necesita ruta
const express = require('express')
const app = express()
const { pokemon } = require('./pokedex.json')

//req almacena la info del URL, res respuesta que damos, next 
app.get("/",(req, res, next) => {
    res.status(200) //código q indica q todo se ejecutó bien
    res.send("Bienvenido")
});

//los dos puntos en la direccion indica el nombre de una variable
app.get("/pokemon",(req, res, next) => {
    res.status(200)
    res.send(pokemon)
});

app.get("/pokemon/:id",(req, res, next) => {
    res.status(200)
    res.send(pokemon[req.params.id - 1])
});
//montamos un servidor

//Necesita un puerto, funcion que ejecuta
//Flecha indica que la funicon no tiene nombre, 
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...")
});
/*
Verbos HTTP
GET
POST
PATCH - update de un dato de un recurso
PUT - modificar todos los elementos
DELETE
*/