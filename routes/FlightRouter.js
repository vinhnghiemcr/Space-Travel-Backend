const router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controllers/FlightController')

router.get('/', controller.GetAllFlights)
router.get('/search', controller.SearchFlights)

// router.get(
//     '/user/:uid',
//     middleware.stripToken,
//     middleware.verifyToken,
//     controller.GetTicketsOfUser
// )

// router.post('', controller.CreateTicket)

// router.put(':id', controller.UpdateTicket)

// router.delete(':id', controller.CancelTicket)

module.exports = router