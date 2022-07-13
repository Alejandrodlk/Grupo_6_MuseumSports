const db = require('../database/models')
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {
    categoryDetail : (req,res) => {
      let cat = db.Category.findByPk(req.params.id , {
            include : ['products'] , 
        })

      let img = db.Image.findAll()

      Promise.all([cat , img])

            .then(([category,images])  => {
               //return res.send(images)
                return res.render('categoryDetail' , {
                    category,
                    images,
                    toThousand
                })
            })
            .catch(error => console.log(error))
    }
}