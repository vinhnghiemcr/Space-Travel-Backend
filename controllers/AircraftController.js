const { Flight, Aircraft, Airport, Planet } = require('../models')

const GetAircraftById = async (req, res) => {
    try {
        const id = req.params.id
        const aircraft = Aircraft.findOne({where: {id: id}})
        res.status(200).json(aircraft)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAircraftById
}