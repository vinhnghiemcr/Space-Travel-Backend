const express = require('express')
const Router = express.Router()
const UserRouter = require('./UserRouter')
const TicketRouter = require('./TicketRouter')
const FlightRouter = require('./FlightRouter')
const AircraftRouter = require('./AircraftRouter')

Router.use('/users', UserRouter)
Router.use('/tickets', TicketRouter)
Router.use('/flights', FlightRouter)
Router.use('/aircrafts', AircraftRouter)

module.exports = Router