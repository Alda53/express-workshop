module.exports = (req, res, next) => {
    //código que indica q todo se ejecutó bien
    return res.status(200).json({code: 1, message: "Bienvenido al Pokedex"})
}