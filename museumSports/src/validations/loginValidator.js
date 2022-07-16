const bcryptjs = require('bcryptjs')
const db = require('../database/models')
//const users = require('../data/users.json')
const { check,body } = require('express-validator')


module.exports = [

    check('email')
        .notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debe ser un email valido'),
        
        body('email')
        .custom((value, {req}) => {
            return db.User.findOne({
                where : {email : value}
            })
            .then( user => {
                if(!bcryptjs.compareSync(req.body.password, user.password)){
                    return Promise.reject('Credenciales invalidas')
                }
            })
            .catch(errors => {
                console.log(errors)
                return Promise.reject('Credenciales invalidas')
            })
        }),
    /* body('password')
        .notEmpty().withMessage('Debes ingresar tu contraseña')
        .custom((value,{req}) => {
            const user = users.find(user => user.email === req.body.email)
            if(!user) {
               return false 
            }else{
                if(!bcryptjs.compareSync(value,user.password)) {
                    return false
                }
            }
            return true
        }).withMessage('Credenciales invalidas'), */
]