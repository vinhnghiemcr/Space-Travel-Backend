const express = require('express')
const Router = express.Router()
const UserRouter = require('./UserRouter')
const TicketRouter = require('./TicketRouter')
const FlightRouter = require('./FlightRouter')

Router.use('/users', UserRouter)
Router.use('/tickets', TicketRouter)
Router.use('/flights', FlightRouter)

// Router.use('/state', StateRouter)
// Router.use('/comment', CommentRouter)
// Router.use('/post', PostRouter)

module.exports = Router