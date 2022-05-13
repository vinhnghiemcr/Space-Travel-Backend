const router = require('express').Router()
const controller = require('../controllers/AircraftController')

router.get('/:id', controller.GetAircraftById)


module.exports = router