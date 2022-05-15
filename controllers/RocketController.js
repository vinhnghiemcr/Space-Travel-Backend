const { Rocket } = require('../models')

const GetRocketById = async (req, res) => {
    try {
        const id = req.params.id
        if (id) {
            const rocket = await Rocket.findOne({where: {id: id}})
            return res.status(200).json(rocket)
        }
        return res.status(404).send({msg: "Could not found"})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetRocketById
}