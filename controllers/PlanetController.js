const { Planet } = require('../models')

const GetPlanets = async (req, res) => {
    try {
        const planets = await Planet.findAll()
        res.status(200).json(planets)
    } catch (error) {
        throw error
    }
}
const GetPlanetById = async (req, res) => {
    try {
        const id = req.params.id
        const planet = await Planet.findOne({where: {id: id}})
        res.status(200).json(planet)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetPlanets,
    GetPlanetById
}