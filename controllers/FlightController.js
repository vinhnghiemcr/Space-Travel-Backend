
const { Flight, Aircraft, Airport } = require('../models')

const GetAllFlights = async (req, res) => {
    try {
        const flights = await Flight.findAll({
            include: [
            {association: 'aircraft', attributes: ['name', 'type']},
            {association: 'departure_airport', attributes: ['id','name', 'code']},
            {association: 'arrival_airport', attributes: ['id','name', 'code']}
        ]})
        res.status(200).json(flights)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllFlights
}