const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(req.body.password, user.passwordDigest))
    ) {
      let payload = {
        id: user.id,
        email: user.email,
        fname: user.fname,
        lname: user.fname
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, fname, lname } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ email, passwordDigest, fname, lname })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateProfile = async (req, res) => {
  try {
    const { email, fname, lname } = req.body
    const { password, newPassword } = req.body
    const user = await User.findByPk(req.params.userId)
    if (
      user && password &&
      (await middleware.comparePassword(
        password,
        user.dataValues.passwordDigest
      ))
    ) {
      if (newPassword) {
        let passwordDigest = await middleware.hashPassword(newPassword)
        await user.update({ passwordDigest })
      }
      if (email) {
        await user.update({ email: email })
      }
      if (fname) {
        await user.update({ fname: fname })
      }
      if (lname) {
        await user.update({ lname: lname })
      }
      await user.save()
      delete user.passwordDigest
      return res.send({ status: 'Ok', payload: user })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {}
}

const DeleteUser = async (req, res) => {
  try {
    const { password } = req.body
    const userId = parseInt(req.params.userId)
    const user = await User.findByPk(userId)
    if (
      user && password &&
      (await middleware.comparePassword(
        password,
        user.dataValues.passwordDigest
      ))
    ) {
      await User.destroy({ where: { id: userId } })
      return res.send({
        status: 'Ok',
        msg: `User has been deleted with ID: ${userId}`
      })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

 

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  UpdateProfile,
  CheckSession,
  DeleteUser
}
