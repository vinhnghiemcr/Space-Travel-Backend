
const { Flight, Aircraft, Airport, Planet } = require('../models')
const { Op } = require("sequelize")

const GetAllFlights = async (req, res) => {
    try {
        const type = req.query.type
        if (type === 'flight') {
            const flights = await Flight.findAll({
                where: {type: type},
                include: [
                {association: 'aircraft', attributes: ['name', 'type']},
                {association: 'departure_airport', attributes: ['id','name', 'code']},
                {association: 'arrival_airport', attributes: ['id','name', 'code']}
            ]})
            res.status(200).json(flights)
        } else if (type === 'space flight'){
            const flights = await Flight.findAll({
                where: {type: type},
                include: [
                {association: 'rocket', attributes: ['name', 'type']},
                {association: 'departure_planet', attributes: ['id','name', 'code']},
                {association: 'arrival_planet', attributes: ['id','name', 'code']}
            ]})
            res.status(200).json(flights)
        } else res.status(404).send({msg: `Could't find results for type: ${type}`})
    } catch (error) {
        throw error
    }
}

const SearchFlights = async (req, res) => {
    try {
        const {type, date, departureAirport, arrivalAirport, departurePlanet, arrivalPlanet } = req.query
        
        if (type === 'flight'){
            const airport1 = await Airport.findOne({
                where: {
                [Op.or]: [{code: departureAirport.toUpperCase()}, {city: departureAirport.toUpperCase()}]
                },
                raw: true, plain: true
            })
            const airport2 = await Airport.findOne({
                where: {
                [Op.or]: [{code: arrivalAirport.toUpperCase()}, {city: arrivalAirport.toUpperCase()}]
                }, 
                raw: true, plain: true
            })
            const flights = await Flight.findAll({            
                where: { 
                    departure_airport_id: airport1.id ,
                    arrival_airport_id: airport2.id ,
                    date: date
                },
                include: [
                    {association: 'aircraft', attributes: ['name', 'type']},
                    {association: 'departure_airport', attributes: ['id','name', 'code']},
                    {association: 'arrival_airport', attributes: ['id','name', 'code']}
                ]
            })
            res.status(200).json(flights)
        } else if (type === 'space flight') {
            const planet1 = await Planet.findOne({
                where: {
                    [Op.or]: [{code: departurePlanet}, {name: departurePlanet}]
                },
                raw: true, plain: true
            })

            const planet2 = await Planet.findOne({
                where: {
                    [Op.or]: [{code: arrivalPlanet}, {name: arrivalPlanet}] 
                }, 
                raw: true, plain: true
            })
            const flights = await Flight.findAll({            
                where: { 
                    departure_planet_id: planet1.id ,
                    arrival_planet_id: planet2.id ,
                    date: date
                },
                include: [
                    {association: 'rocket', attributes: ['name', 'type']},
                    {association: 'departure_planet', attributes: ['id','name', 'code']},
                    {association: 'arrival_planet', attributes: ['id','name', 'code']}
                ]
            })
            res.status(200).json(flights)
        } else res.status(404).send(`Coundn't find the ${type}`)
        
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetAllFlights,
    SearchFlights
}