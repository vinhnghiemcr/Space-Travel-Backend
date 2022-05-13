const router = require('express').Router()
const controller = require('../controllers/RocketController')

router.get('/:id', controller.GetRocketById)


module.exports = router