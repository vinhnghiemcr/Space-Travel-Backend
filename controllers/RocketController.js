const { Rocket } = require('../models')

const GetRocketById = async (req, res) => {
    try {
        const id = req.params.id
        const rocket = await Rocket.findOne({where: {id: id}})
        res.status(200).json(rocket)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetRocketById
}