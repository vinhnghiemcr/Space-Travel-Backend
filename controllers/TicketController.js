
const { User, Ticket, Flight } = require('../models')

const GetTicketById = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        const ticket = await Ticket.findOne({where: {id: id},
            include: [
                {association: 'flight',
                include: [
                    {association: 'aircraft', attributes: ['name', 'type']},
                    {association: 'departure_airport', attributes: ['id','name', 'code']},
                    {association: 'arrival_airport', attributes: ['id','name', 'code']}] 
        }]
        })
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
        const {user, passenger, flight } = req.body 
        console.log(user, passenger, flight)
        // flight = await Flight.findOne({where: {id: flight.id}})
        if (user){
            console.log("GETTING USER")
            const data = {
                type: flight.type,
                passenger,
                userId: user.id,
                flightId: flight.id
            }
            console.log(data, "With User")
            const ticket = await Ticket.create(data)
            res.status(201).json(ticket)
        } else {
            const data = {
                type: flight.type,
                passenger,
                flightId: flight.id
            }
            console.log(data, "Without User")
            const ticket = await Ticket.create(data)
            console.log(Ticket, "Without User Ticket")
            res.status(201).json(ticket)
        } 
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