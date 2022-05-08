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

const getTicketsOfUser = async (req,res) => {
    try {
        const userId = parseInt(req.params.uid)
        const tickets = await Ticket.findAll({where: { user_id: userId}})
        res.status(200).json(tickets)
    } catch (error) {
        throw error
    }
}

const createTicket = async (req, res) => {
    try {
        const ticket = await Ticket.create(req.body)
        res.status(201).json(ticket)
    } catch (error) {
        throw error
    }
}

const updateTicket = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const ticket = await Ticket.update({ where: {id: id}, returning: true})
        res.status(200).json(ticket)
    } catch (error) {
        throw error
    }
}

const cancelTicket = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const ticket = await Ticket.delete({where: {id: id}})
        res.status(200).json(ticket)
    } catch (error) {
        throw error
    }
}


module.exports = {
    getTicketById,
    getTicketsOfUser,
    createTicket,
    updateTicket,
    cancelTicket
}