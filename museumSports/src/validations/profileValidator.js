const {check, body} = require('express-validator');


module.exports = [

    check('name')
        .notEmpty().withMessage('Debes proporcionar un titulo').bail()
        .isLength({min : 2 , max : 255}).withMessage('Mínimo dos caracteres'),

   

]