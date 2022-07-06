const db = require('../database/models')

module.exports = {
    all : (req,res) => {
        db.Category.findAll()
            .then(categories  => {
                return res.send(categories)
            })
    }
}