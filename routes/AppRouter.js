const express = require('express')
const Router = express.Router()
const UserRouter = require('./UserRouter')
const TicketRouter = require('./TicketRouter')
const FlightRouter = require('./FlightRouter')
const AircraftRouter = require('./AircraftRouter')
const RocketRouter = require('./RocketRouter')
const PlanetRouter = require('./PlanetRouter')
const AirportRouter = require('./AirportRouter')

Router.use('/users', UserRouter)
Router.use('/tickets', TicketRouter)
Router.use('/flights', FlightRouter)
Router.use('/aircrafts', AircraftRouter)
Router.use('/rockets', RocketRouter)
Router.use('/airports', AirportRouter)
Router.use('/planets', PlanetRouter)

module.exports = Router