const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.put(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProfile
)
router.get('/:userId/friendList', 
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllFollowers
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
router.delete(
  '/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
)


module.exports = router
