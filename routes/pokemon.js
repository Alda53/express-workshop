const express = require("express")
const pokemon = express.Router()
const pk = require('../pokedex.json').pokemon
//los dos puntos en la direccion indica el nombre de una variable
pokemon.post("/",(req, res, next) => {
    return res.status(200).res.send(req.body)
});

pokemon.get("/",(req, res, next) => {
    return res.status(200).res.send(pk)
    // res.send(pokemon)
});

pokemon.get("/pokemon/:id([0-9]{1,3})",(req, res, next) => {
    const id = req.params.id - 1
    if(id >= 0 && id <= 150){
        return res.status(200).res.send(pk[req.params.id - 1])
    }
    res.status(404).res.send("Pokemon no encontrado")
});

pokemon.get("/pokemon/:name([A-Za-z]+)", (req, res, next) => {
    const name = req.params.name
    //Función filtro
    const pkmn = pk.filter((p) => {
        /* OPERADOR TERNARIO, remplazaremos el if del comentario
        siendo su estructura: condicion ? valor si falso : valor si verdadero, no necesita return, ya lo hace */
        return (p.name.toUpperCase() == name.toUpperCase()) ? p : null
        /* if (p.name.toUpperCase() == name.toUpperCase()){
            return p
        } */
    })
    if(pkmn.length > 0){
        return res.status(200).send(pkmn)
    }else{
        return res.status(404).res.send("Pokemon no encontrado")
    }
});

module.exports = pokemon