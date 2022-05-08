const router = require('express').Router()
const middleware = require('../middleware')
const ticket = require('../models/ticket')

router.get('/tickets/:id')

router.get('/tickets/user/:uid')

router.post('/tickets')

router.put('/tickets/:id')