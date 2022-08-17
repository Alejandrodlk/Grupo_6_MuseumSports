const {check,body} = require('express-validator')

module.exports = [

    check('title')
        .notEmpty().bail()
        .isLength({min : 2}).withMessage('Mínimo dos caracteres'),

    check('description')
        .notEmpty().withMessage('Debes proporcionar una descripcion').bail(),

    check('price')
        .notEmpty().withMessage('Debes proporcionar un precio').bail(),
        
    check('discount')
        .notEmpty().withMessage('Debes proporcionar un descuento').bail()
        .isLength({min : 1 , max : 2}).withMessage('Entre 1 y 2 numeros'),

    check('categoryId')
        .notEmpty().withMessage('Debes proporcionar un precio').bail(),

    check('athleteId')
        .notEmpty().withMessage('Debes proporcionar un precio').bail(),

]