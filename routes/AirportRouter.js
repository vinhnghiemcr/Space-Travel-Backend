const router = require('express').Router()
const controller = require('../controllers/AirportController')

router.get('/:id', controller.GetAirportById)


module.exports = router