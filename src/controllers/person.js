const ServicePerson = require("../services/person");

const service = new ServicePerson()

class ControllerPerson {
    getAll(req, res) {
        try {
            const names = service.getAll()
            res.status(200).json({ names })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

    get(req, res) {
        try {
            const id = req.params.id
            const value = service.get(id)
            res.status(200).json({ value })
        } catch (error) {
            console.log(error)
        }
    }

    create(req, res) {
        try {
            const value = req.body.value
            const values = service.create(value)
            res.status(201).json({ message: "create sucessfuly" })
        } catch ( error ) {
            res.status(500).json({error: error.message})
            console.log(error)
        }
    }

    update(req, res) {
        try {
            const id = req.params.id
            const value = req.body.value
            service.update(id, value)
            res.status(200).json({ message: "update sucessfuly!" })
        } catch( error ) {
            res.status(500).json({error: error.message})
            console.log(error)
        }
    }

    delete(req, res) {
        try {
            const id = req.params.id
            service.delete(id)
            res.status(204).json({ message: "delete sucessfuly" })
        } catch ( error ) {
            res.status(500).json({error: error.message})
            console.log(error)
        }
    }
    
}

module.exports = ControllerPerson;