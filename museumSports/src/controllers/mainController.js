const db = require('../database/models')
const { Op } = require("sequelize");
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/* const fs = require('fs')
const readJSON = JSON.parse(fs.readFileSync("src/data/products.json" ,"utf8")) */


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
            return res.render('index' , {
                dest,
                ultimos,
                oferta,
                toThousand
            })
        })
        .catch(error => console.log(error))
    },

    search : (req,res) => {
        const {keyword} = req.query

        db.Product.findAll({
            where : {
                [Op.or] : [
                    {
                        title : {[Op.substring] : keyword}
                    },
                    {
                        description : {[Op.substring] : keyword}
                    }
                ]
            },
            include : ['images']
        })
            .then(results => {
                return res.render('results' , {
                    results,
                    keyword,
                    toThousand
                })
            })
            .catch(error => console.log(error))
    }
}