const res = require('express/lib/response')
const { User, Ticket } = require('../models')

const getTicketById = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const ticket = await Ticket.findOne({where: {id: id}})
        res.status(200).json(ticket)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getTicketById
}