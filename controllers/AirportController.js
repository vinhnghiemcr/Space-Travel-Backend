const { Airport } = require('../models')

const GetAirportById = async (req, res) => {
    try {
        const id = req.params.id
        if (id) {
            const airport = await Airport.findOne({where: {id: id}})
            return res.status(200).json(airport)
        }        
        return res.status(404).send({msg: "Could not found"})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAirportById
}