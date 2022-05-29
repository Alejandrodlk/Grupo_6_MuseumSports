const fs = require('fs')

const readJSON = JSON.parse(fs.readFileSync("src/data/products.json" ,"utf8"))

module.exports = {

    index : (req,res) => {
        let products = readJSON

        res.render("index" , {
            products
        })
    },

    search : (req,res) => {
        let products = readJSON
        const {keyword} = req.query

        let results = products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()) || product.description.toLowerCase().includes(keyword.toLowerCase()))
        
        return res.render('results' , {
            results,
            keyword
       })

    }

}