const fs = require('fs')
const db = require('../database/models')
const { Op } = require("sequelize");
const readJSON = JSON.parse(fs.readFileSync("src/data/products.json" ,"utf8"))
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



module.exports = {

    index : (req,res) => {
        let destacados = db.Product.findAll({
            include : ['images'],
            order : [['price' , 'DESC']],
            limit : 5
        })

        let ultimosAgregados = db.Product.findAll({
            include : ['images'],
            order : [['id' , 'DESC']],
            limit : 5
        })

        let enOferta = db.Product.findAll({
            include : ['images'],
            where : {
                discount : {
                    [Op.gte] : 15
                },
            },
            limit : 5            
        })

        Promise.all([destacados , ultimosAgregados , enOferta])

        .then(([dest,ultimos,oferta]) => {
            //return res.send(dest)
            return res.render('index' , {
                dest,
                ultimos,
                oferta,
                toThousand
            })
            return res.send([dest,ultimos,Oferta])
        })
        .catch(error => console.log(error))

       /*  let products = readJSON
        res.render("index" , {
            products,
            toThousand
        }) */
    },

    search : (req,res) => {
        let products = readJSON
        const {keyword} = req.query

        let results = products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()) || product.description.toLowerCase().includes(keyword.toLowerCase()))
        
        return res.render('results' , {
            results,
            keyword,
            toThousand
       })

    }

}