
const { User, Ticket, Flight } = require('../models')

const GetTicketById = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        if (id.toString() === 'NaN') {
           return res.status(404).send({msg: "Page not found"})
        }
        const ticket = await Ticket.findOne({where: {id: id},
            include: [
                {association: 'flight',
                include: [
                    {association: 'aircraft', attributes: ['name', 'type']},
                    {association: 'rocket', attributes: ['name', 'type']},
                    {association: 'departure_airport', attributes: ['id','name', 'code']},
                    {association: 'departure_planet', attributes: ['id','name', 'code']},
                    {association: 'arrival_airport', attributes: ['id','name', 'code']},
                    {association: 'arrival_planet', attributes: ['id','name', 'code']}
                ] 
        }]
        })
        return res.status(200).json(ticket)
    } catch (error) {
        throw error
    }
}

const GetTicketsOfUser = async (req,res) => {
    try {
        const userId = parseInt(req.params.uid)
        if (userId.toString() === 'NaN') {
            return res.status(404).send({msg: "Page not found"})
         }
        const tickets = await Ticket.findAll({where: { user_id: userId},
            include: [
                {association: 'flight',
                include: [
                    {association: 'aircraft', attributes: ['name', 'type']},
                    {association: 'rocket', attributes: ['name', 'type']},
                    {association: 'departure_airport', attributes: ['id','name', 'code']},
                    {association: 'departure_planet', attributes: ['id','name', 'code']},
                    {association: 'arrival_airport', attributes: ['id','name', 'code']},
                    {association: 'arrival_planet', attributes: ['id','name', 'code']}
                ] 
                }]       
        })
        return res.status(200).json(tickets)
    } catch (error) {
        throw error
    }
}

const CreateTicket = async (req, res) => {
    try {
        const {user, passenger, flight } = req.body 
        const foundflight = await Flight.findOne({where: {id: flight.id}})
        if (foundflight.capacity > 0){
            if (user){                
                const data = {
                    type: flight.type,
                    passenger,
                    userId: user.id,
                    flightId: flight.id
                }
                const ticket = await Ticket.create(data)
                foundflight.capacity = foundflight.capacity - 1
                await foundflight.save()
                return res.status(201).json(ticket)                
                
            } else {
                const data = {
                    type: flight.type,
                    passenger,
                    flightId: flight.id
                }
                const ticket = await Ticket.create(data)
                foundflight.capacity = foundflight.capacity - 1
                await foundflight.save()
                return res.status(201).json(ticket)
            }
        }
        
    } catch (error) {
        throw error
    }
}

const UpdateTicket = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        if (id.toString() === 'NaN') {
            return res.status(404).send({msg: "Page not found"})
         }
        await Ticket.update({passenger: req.body} , { where: {id: id}})
        const ticket = await Ticket.findOne({where: {id: id},
            include: [
                {association: 'flight',
                include: [
                    {association: 'aircraft', attributes: ['name', 'type']},
                    {association: 'rocket', attributes: ['name', 'type']},
                    {association: 'departure_airport', attributes: ['id','name', 'code']},
                    {association: 'departure_planet', attributes: ['id','name', 'code']},
                    {association: 'arrival_airport', attributes: ['id','name', 'code']},
                    {association: 'arrival_planet', attributes: ['id','name', 'code']}
                ] 
                }]
        })
        return res.status(200).json(ticket)
    } catch (error) {
        throw error
    }
}

const CancelTicket = async (req,res) => {
    try {
        const id = parseInt(req.params.id)
        if (id.toString() === 'NaN') {
            return res.status(404).send({msg: "Page not found"})
         }
        const ticket = await Ticket.destroy({where: {id: id}})
        return res.status(200).json(ticket)
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