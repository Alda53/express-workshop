//este archivo solicitará los demás para su función final
//express aquí es uma clase, require busca una dependencia instalada, no necesita ruta
const express = require('express')
const app = express()

//req almacena la info del URL, res respuesta que damos, next 
app.get("/",(req, res, next) => {
    res.status(200) //código q indica q todo se ejecutó bien
    res.send("Bienvenido")
});

//montamos un servidor

//Necesita un puerto, funcion que ejecuta
//Flecha indica que la funicon no tiene nombre, 
app.listen(3000, () => {
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