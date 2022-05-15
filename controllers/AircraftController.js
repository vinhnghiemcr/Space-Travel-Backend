const { Flight, Aircraft, Airport, Planet } = require('../models')

const GetAircraftById = async (req, res) => {
    try {
        const id = req.params.id
        if (id) {
            const aircraft = await Aircraft.findOne({where: {id: id}})
            res.status(200).json(aircraft)
        }
        return res.status(404).send({msg: "Could not found"})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAircraftById
}