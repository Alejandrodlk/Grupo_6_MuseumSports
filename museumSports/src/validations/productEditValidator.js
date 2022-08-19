const {check,body} = require('express-validator')

module.exports = [

    check('title')
        .notEmpty().withMessage('Debes proporcionar un titulo').bail()
        .isLength({min : 2 , max : 255}).withMessage('Mínimo dos caracteres'),

    check('description')
        .notEmpty().withMessage('Debes proporcionar una descripcion').bail()
        .isLength({min : 2 , max : 1000}).withMessage('Mínimo dos caracteres'),

    check('price')
        .notEmpty().withMessage('Debes proporcionar un precio').bail()
        .isNumeric().withMessage('Debes ingresar solo numeros'),
        
    check('discount')
        .notEmpty().withMessage('Debes proporcionar un descuento').bail()
        .isLength({min : 1 , max : 2}).withMessage('Solo numeros entre 0 y 99')
        .isNumeric().withMessage('Debes ingresar solo numeros'),

    check('categoryId')
        .notEmpty().withMessage('Debes seleccionar una categorya').bail(),

    check('athleteId')
        .notEmpty().withMessage('Debes seleccionar un Deportista').bail(),

]