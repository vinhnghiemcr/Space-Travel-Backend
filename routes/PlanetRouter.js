const router = require('express').Router()
const controller = require('../controllers/PlanetController')

router.get('/:id', controller.GetPlanetById)


module.exports = router