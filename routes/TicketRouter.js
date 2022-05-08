const router = require('express').Router()
const middleware = require('../middleware')
const ticket = require('../models/ticket')

router.get('/tickets/:id', ticket.getTicketByid)

router.get(
    '/tickets/user/:uid',
    middleware.stripToken,
    middleware.verifyToken,
    ticket.getTicketsOfUser
)

router.post('/tickets', ticket.createTicket)

router.put('/tickets/:id', ticket.updateTicket)

router.delete('tickets/:id', ticket.cancelTicket)