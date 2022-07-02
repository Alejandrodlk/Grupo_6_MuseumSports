const fs = require('fs')

const readJSON = JSON.parse(fs.readFileSync("src/data/products.json" ,"utf8"))
const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


module.exports = {

    index : (req,res) => {
        let products = readJSON

        res.render("index" , {
            products,
            toThousand
        })
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