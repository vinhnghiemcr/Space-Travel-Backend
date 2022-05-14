const { Planet } = require('../models')

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
    GetPlanetById
}