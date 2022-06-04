const {check,body} = require('express-validator')
const users = require('../data/users.json')

module.exports = [

    check('name')
        .isLength({min : 3}).withMessage('Minimo 2 caracteres').bail()
        .isAlpha().withMessage('solo letras'),

    check('lastname')
        .isLength({min : 3}).withMessage('Minimo 2 caracteres').bail()
        .isAlpha().withMessage('solo letras'),

    body('email')
        .notEmpty().withMessage('Debes proporcionar un email').bail()
        .isEmail().withMessage('Debe ser un email valido')
        .custom((value,{req}) => {
            const user = users.find(user => user.email === value)
            if(user) {
               return false 
            }else{
                return true
            }
            
        }).withMessage('El email ya se encuentra registrado!'),
        
    check('password')
        .isLength({ min: 6, max: 12 }).withMessage('La contraseña debe tener un minimo de 6 y un maximo de 12').bail(),

    body('password2')
        .custom((value , {req}) => {
            if (value !== req.body.password) {
                return false
            }else{
                return true
            }
        }).withMessage('La contraseña no coinside'),

    check('bases')
        .isString('on').withMessage('Debes aceptar bases y condiciones')

]

    
        
