const router = require('express').Router()
const middleware = require('../middleware')
const ticket = require('../models/ticket')

router.get('/tickets/:id', ticket.getTicketByid)

router.get(
    '/tickets/user/:uid',
    middleware.stripToken,
    middleware.verifyToken,
)

router.post('/tickets')

router.put('/tickets/:id')