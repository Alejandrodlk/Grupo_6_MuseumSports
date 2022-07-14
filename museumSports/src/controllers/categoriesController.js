const db = require('../database/models')
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
    categoryDetail : (req,res) => {
        let idCategory = req.params.id

        db.Category.findByPk(req.params.id , {
            include : [
                {
                    association : 'products',
                    include : ['images']
                }
            ],
        })
            .then(category => {
                //return res.send(category)
                return res.render('categoryDetail' , {
                    category,
                    toThousand
                })
            })
            .catch(error => console.log(error))
    }
}