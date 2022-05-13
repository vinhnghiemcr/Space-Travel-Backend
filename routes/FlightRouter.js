const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/FlightController')

router.get('/', controller.GetAllFlights)
router.get('/search', controller.SearchFlights)


module.exports = router