const db = require('../database/models')

module.exports = {
    all : (req,res) => {
        db.Athlete.findAll({
            include : [
                {
                    association : 'products',
                    include : ['images']
                }
            ],
        })
            .then(athletes => {
                return res.send(athletes)
            })
    }
}