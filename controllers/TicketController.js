
const { User, Ticket } = require('../models')

const GetTicketById = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const ticket = await Ticket.findOne({where: {id: id}})
        res.status(200).json(ticket)
    } catch (error) {
        throw error
    }
}

const GetTicketsOfUser = async (req,res) => {
    try {
        const userId = parseInt(req.params.uid)
        const tickets = await Ticket.findAll({where: { user_id: userId}})
        res.status(200).json(tickets)
    } catch (error) {
        throw error
    }
}

const CreateTicket = async (req, res) => {
    try {
        const ticket = await Ticket.create(req.body)
        res.status(201).json(ticket)
    } catch (error) {
        throw error
    }
}

const UpdateTicket = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const ticket = await Ticket.update({ where: {id: id}, returning: true})
        res.status(200).json(ticket)
    } catch (error) {
        throw error
    }
}

const CancelTicket = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const ticket = await Ticket.delete({where: {id: id}})
        res.status(200).json(ticket)
    } catch (error) {
        throw error
    }
}


module.exports = {
    GetTicketById,
    GetTicketsOfUser,
    CreateTicket,
    UpdateTicket,
    CancelTicket
}