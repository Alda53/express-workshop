const express = require("express")
const pokemon = express.Router()
const pk = require('../pokedex.json').pokemon
//los dos puntos en la direccion indica el nombre de una variable
pokemon.post("/",(req, res, next) => {
    return res.status(200).send(req.body)
});

pokemon.get("/",(req, res, next) => {
    return res.status(200).send(pk)
    // res.send(pokemon)
});

pokemon.get("/:id([0-9]{1,3})",(req, res, next) => {
    const id = req.params.id - 1
    if(id >= 0 && id <= 150){
        return res.status(200).send(pk[req.params.id - 1])
    }
    return res.status(404).send("Pokemon no encontrado")
});

pokemon.get("/:name([A-Za-z]+)", (req, res, next) => {
    const name = req.params.name
    //Función filtro
    const pkmn = pk.filter((p) => {
        /* OPERADOR TERNARIO, remplazaremos el if del comentario
        siendo su estructura: condicion ? valor si falso : valor si verdadero, no necesita return, ya lo hace */
        return (p.name.toUpperCase() == name.toUpperCase()) && p
        /* if (p.name.toUpperCase() == name.toUpperCase()){
            return p
        } */
    })
    if(pkmn.length > 0){
        return res.status(200).send(pkmn)
    }else{
        return res.status(404).send("Pokemon no encontrado")
    }
});

module.exports = pokemon