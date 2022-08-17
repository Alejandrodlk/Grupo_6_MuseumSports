const fs = require('fs');
const path = require('path');

const db = require('../database/models')

const {validationResult} = require('express-validator')

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const readJSON = () => {
    const products = JSON.parse(fs.readFileSync("src/data/products.json", 'utf-8'));	
	return products
}

const saveJSON = (e) => fs.writeFileSync("src/data/products.json" , JSON.stringify(e,null,3))

module.exports = {

    //Todos los productos
    all : (req,res) => {

        db.Product.findAll({
            include : ['images']
        })
            .then(products => {
                return res.render('products', {
                    products,
                    toThousand
                })
            })
            .catch(error => console.log(error))

        //////////////////////
        /* let products = readJSON()

        res.render("products" , {
            products,
            toThousand
        }) */
         //////////////////////
    },
     //detalle de producto
     detail : (req,res) => {

        db.Product.findByPk(req.params.id , {
            include : ['images']
        })
            .then(product => {
                db.Product.findAll({
                    where : {
                        categoryId : product.categoryId
                    },
                    include : ['images'],
                    limit : 6
                }).then(products => {
                    return res.render('productDetail' ,{
                        product,
                        priceDiscount : toThousand((product.price - (product.price * product.discount) / 100) / 6),
                        toThousand,
                        products
                    })
                })
               
            })
        /* let products = readJSON()
		let product = products.find(product => product.id === +req.params.id)
		return res.render("productDetail" , {
			product,
            toThousand,
            priceDiscount : toThousand((product.price - (product.price * product.discount) / 100) / 6)
		})
 */
    },

    // Creacion de producto
    create : (req,res) => {
        let cat = db.Category.findAll()

        let ath = db.Athlete.findAll({
            order : [['lastName' , 'ASC']]
        })

        Promise.all([cat,ath])
            .then(([categories,athletes]) => {
                return res.render("./admin/productAdd", {
                    categories,
                    athletes
                })
            })
            .catch(error => console.log(error))
    },

    store : (req,res) => {
        const errors = validationResult(req)

        const {title,description,price,discount,categoryId,athleteId,images} = req.body
        
        if (errors.isEmpty()) {

            db.Product.create({
                title : title.trim(),
                description : description.trim(),
                price : +price,
                discount : +discount,
                categoryId : +categoryId,
                athleteId : +athleteId
            })
            .then(product => {
                if(req.files.length > 0){  // Verifico que llegue alguna imagen
                    let images = req.files.map(({filename},i) => {  ////desestructuro req.files su propiedad filename
                        let image = {  // Cuando mapeamos images creamos un objeto image
                            name : filename,  // Las 3 columnas hacen referencia a los campos configurados en el modelo "Image"
                            productId : product.id,  
                            primary : i === 0 ? 1 : 0 // 'i'  lugar que ocupa cada elemento en el array
                        }
                        return image  //RETORNAMOS EL OBJETO EN CADA VUELTA DEL MAP
                    })
                    db.Image.bulkCreate(images,{validate :true})  //validate???
                        .then( (result) => console.log(result))		
                }

                return res.redirect('/products/all')
            })
            .catch(error => console.log(error))
        }else{

        let cat = db.Category.findAll()

        let ath = db.Athlete.findAll({
            order : [['lastName' , 'ASC']]
        })

        Promise.all([cat,ath])
            .then(([categories,athletes]) => {
                return res.render("./admin/productAdd", {
                    categories,
                    athletes,
                    old : req.body,
                    errors : errors.mapped()
                })
            })
            .catch(error => console.log(error))
        }

       /* let products = readJSON()
       const {id,name,description,price,discount,image,sport,category} = req.body  
       const newProduct = {
           id : products[products.length -1].id +1,
           name,
           description,
           price : +price,
           discount : +discount,
           image : req.file ? req.file.filename : "default-image.png",
           sport,
           category
       }  
       products.push(newProduct)
       saveJSON(products)
       res.redirect("/products/all") */
    },

    //Edicion de producto
    edit : (req,res) => {

            let prod = db.Product.findByPk(req.params.id , {
                include : ['images']
            })

            let cat = db.Category.findAll()

            let ath = db.Athlete.findAll({
                order : [['lastName' , 'ASC']]
            })
    
            Promise.all([prod,cat,ath])
                .then(([product,categories,athletes]) => {
                    return res.render("./admin/productEdit", {
                        product,
                        categories,
                        athletes,
                    })
                })
                .catch(error => console.log(error))

       /*  let products = readJSON()
		let product = products.find(product => product.id === +req.params.id)
		return res.render("./admin/productEdit" , {
			product
		}) */
    },

    update: (req, res) => {

        const errors = validationResult(req)

        const {title,description,price,discount,categoryId,athleteId} = req.body

        db.Product.update(
            {
                title ,
                description : description,
                price : +price,
                discount : +discount,
                categoryId : +categoryId,
                athleteId : +athleteId
            },
            {
                where : {
                    id : req.params.id
                }
            }
        )

            .then(() => {
                if(req.files.length > 0){  // Verifico que llegue alguna imagen
                db.Image.destroy({
                    where : {
                        productId : req.params.id
                    }
                })
                    .then(() => {
                        let images = req.files.map(({filename},i) => {  ////desestructuro req.files su propiedad filename
                            let image = {  // Cuando mapeamos images creamos un objeto image
                                name : filename,  // Las 3 columnas hacen referencia a los campos configurados en el modelo "Image"
                                productId : req.params.id,  
                                primary : i === 0 ? 1 : 0 // 'i'  lugar que ocupa cada elemento en el array
                            }
                            return image  //RETORNAMOS EL OBJETO EN CADA VUELTA DEL MAP
                        })
                        db.Image.bulkCreate(images,{validate :true})  //validate???
                            .then( (result) => console.log(result))	
                            return res.redirect('/products/all') // OJO Redirecciono en el then() peincipal. APARTE: reiniciar servidor

                    })
    	
                }else{
                    return res.redirect('/products/all') // OJO Redirecciono en el then() peincipal. APARTE: reiniciar servidor
                }
            })
            .catch(error => console.log(error))


		/* let products = readJSON()
		const {name,price,discount,description,category,sport} = req.body
		const product = products.find(product => product.id === +req.params.id)
		const productsModify = products.map(product => {
			if (product.id === +req.params.id) {
				let productModify = {
					...product,
					name : name.trim(),
					price : +price,
					discount: +discount,
					description : description.trim(),
					image : req.file ? req.file.filename : product.image,
					category,
                    sport 	
				}	          
				return 	productModify		
			}
			return product
		})
		saveJSON(productsModify)
		return res.redirect("/products/all") */
	},

    
   

    //Carrito de compras
    cart : (req,res) => res.render("productCart"),

    

    //Eliminar producto // Previamente configurar modelo en  onDelete: 'cascade' para borrar el producto y sus imagenes asociadas
    remove : (req,res) => {

        db.Product.destroy({
            where : {
                id : req.params.id
            }
        })
            .then(() => {
                    return res.redirect('/products/all');
                })
                .catch(error => console.log(error))

        /* let products = readJSON()
		const productsModify = products.filter(product => product.id !== +req.params.id)
		saveJSON(productsModify)
		return res.redirect("/products/all") */
    },
}