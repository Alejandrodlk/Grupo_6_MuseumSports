const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')

const db = require('../database/models')

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
        const {name,lastName,email,password,} = req.body //activo,typeId

        if (errors.isEmpty()) {
            db.User.create({
                name,
                lastName,
                email,
                password : bcryptjs.hashSync(password,10),
                activo : 1,
                typeId : 2,
                avatar : 'default.png'
            })
                .then(user => {
                    return res.redirect('login')
                })
                .catch(error => console.log(error))
            /* let users = readJSON()
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
            res.redirect('/users/login') */
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
       
        let errors = validationResult(req)
        if (errors.isEmpty()){
            db.User.findOne({
                include : ['type'],
                where : { email : req.body.email }
            })
            .then(user => {
                //return res.send(user)
                req.session.userLogin = {
                    id : user.id,
                    nombre : user.name,
                    apellido : user.lastName,
                    rol : user.type.type
                }
                if(req.body.remember){
                    res.cookie('museumSports', req.session.userLogin, {maxAge : 60*60*24*30} )
                }
                res.locals.userLogin = req.session.userLogin;
                res.redirect('/')
            })
            .catch(errors => console.log(errors))
        }else{
            res.render('login', {
                   errors : errors.mapped(),
                old : req.body,
            })
        }
        /* const errors = validationResult(req)
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
        } */
    },

    profile : (req,res) =>{
        let us = db.User.findByPk(req.session.userLogin.id , {
            include : ['type']
        })

        let cat = db.Category.findAll()

        Promise.all([us,cat])
            .then(([user,categories]) => {
                return res.render('admin/profile' , {
                    user,
                    categories
                })
            })
            .catch(error => console.log(error))
    },

    processProfile : (req,res) => {
        const {name,lastName,password,password2,country,city,direcction,avatar,preference} = req.body
        db.User.findByPk(req.session.userLogin.id)
            .then(user => {
                db.User.update({
                    name,
                    lastName,
                    password : password ? bcryptjs.hashSync(password, 10) : user.password,
                    country,
                    city,
                    direcction,
                    avatar : req.file ? req.file.filename : user.avatar,
                    preference
                },
                {
                    where : {
                    id : user.id
                    }
                })
                    .then((user) => {
                        console.log(user);
                       return res.redirect('profile')
                    })
                    .catch(error => {console.log(error)})
            })

        
    },

    logout : (req,res) => {
        req.session.destroy() // destruir session
        res.cookie('museumSports' , null , {maxAge : -1}) // destruir cookie
        res.redirect('/')
    }
}