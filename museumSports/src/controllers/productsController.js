const fs = require('fs');
const path = require('path');


const readJSON = JSON.parse(fs.readFileSync("src/data/products.json" ,"utf8"))
const saveJSON = (e) => fs.writeFileSync("src/data/products.json" , JSON.stringify(e,null,3))

module.exports = {

    
    // Creacion de producto
    create : (req,res) => {
        
        return res.render("productAdd" , {

        })
    },

    store : (req,res) => {
       let products = readJSON
       const {id,name,description,price,discount,image,sport,category} = req.body 
        
       const newProduct = {
           id : products[products.length -1].id +1,
           name,
           description,
           price : +price,
           discount : +discount,
           image : "rugby6.jpg",
           sport,
           category
       }

       products.push(newProduct)
       saveJSON(products)

       res.redirect("/")
    },

    //Edicion de producto
    edit : (req,res) => {
        return res.render("productEdit" , {

        })
    },

    update : (req,res) => {
        return res.send(req.body)
    },

    //Eliminar producto
    remove : (req,res) => {
        return res.send("Remove")
    },
    
    //detalle de producto
    detail : (req,res) => {

        
       return res.render("productDetail")
    },

    //Carrito de compras
    cart : (req,res) => res.render("productCart"),

    //Todos los productos
    all : (req,res) => {

        let products = readJSON

        res.render("products" , {
            products,
        })
    }

    

}