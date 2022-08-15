const {check,body,files} = require('express-validator')

module.exports = [

    check('title')
        .isLength({min : 2}).withMessage('Mínimo dos caracteres').bail(),

    check('description')
        .notEmpty().withMessage('Debes proporcionar una descripcion').bail(),

    check('price')
        .notEmpty().withMessage('Debes proporcionar un precio').bail(),
        
    check('discount')
        .notEmpty().withMessage('Debes proporcionar un descuento').bail()
        .isLength({min : 1 , max : 3}).withMessage('Entre 1 y 3 numeros'),

    check('categoryId')
        .notEmpty().withMessage('Debes proporcionar un precio').bail(),

    check('athleteId')
        .notEmpty().withMessage('Debes proporcionar un precio').bail(),

]