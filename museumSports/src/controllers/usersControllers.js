const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')

const {validationResult} = require('express-validator')


/* const readJSON = JSON.parse(fs.readFileSync("src/data/products.json" ,"utf8")) */

const readJSON = () => {
    const users = JSON.parse(fs.readFileSync("src/data/users.json", 'utf-8'));	
	return users
}

const saveJSON = (e) => fs.writeFileSync("src/data/users.json" , JSON.stringify(e,null,3))

module.exports = {

    register : (req,res) => {
        return res.render("register")
    },
    
    processRegister: (req, res) => {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            let users = readJSON()
            let lastId = users.length !== 0 ? users[users.length -1].id : 0 
            const {id, name, lastname, avatar, rol, password, email} = req.body

            const newUser = {
                id: +lastId +1,
                name: name.trim(),
                lastname: lastname.trim(),
                email ,
                password : bcryptjs.hashSync(password , 10),
                avatar : req.file ? req.file.filename : "default-image.png",
                rol : 'user'
            };
    
            users.push(newUser);
    
            saveJSON(users)
    
            res.redirect('/users/login')
        }else{
            return res.render('register' , {
                old : req.body,
                errors : errors.mapped()
            })
        }      
    }, 

    login : (req,res) => {
        return res.render('login')
    },

    processLogin : (req,res) => {
        const errors = validationResult(req)
        
        if (errors.isEmpty()) {
            let users = readJSON()
            const {id,name,image,rol} = users.find(user => user.email === req.body.email)

            req.session.userLogin = { // Estoy creando userLogin dentro de session
                id,
                name,
                image,
                rol
            }
            if(req.body.remember){
                res.cookie('museumSports' , req.session.userLogin , {maxAge: 1000*60*2})
            }
            res.redirect('/')
        }else{
            return res.render('login' , {
                old : req.body,
                errors : errors.mapped()
            })
        }
    },

    profile : (req,res) =>{
        return res.render('admin/profile')
    },

    processProfile : (req,res) => {
        return res.send('perfil en proceso')
    },

    logout : (req,res) => {
        req.session.destroy() // destruir session
        res.cookie('museumSports' , null , {maxAge : -1}) // destruir cookie
        res.redirect('/')
    }

   
}