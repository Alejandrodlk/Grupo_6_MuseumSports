const db = require('../database/models')

module.exports = {
    all : (req,res) => {
        db.Athlete.findAll()
            .then(athletes => {
                return res.send(athletes)
            })
    }
}