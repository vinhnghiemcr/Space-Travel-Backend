const { Airport } = require('../models')

const GetAirportById = async (req, res) => {
    try {
        const id = req.params.id
        const airport = await Airport.findOne({where: {id: id}})
        res.status(200).json(airport)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAirportById
}