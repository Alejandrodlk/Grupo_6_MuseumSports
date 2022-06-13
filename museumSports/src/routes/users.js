var express = require('express');
var router = express.Router();
const upload = require('../middlewares/uploadImagesUsers')

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
const loginCheck = require('../middlewares/loginCheck')


const {login,logout,processLogin, register, processRegister ,profile,processProfile} = require("../controllers/usersControllers")

/* /users. */
router.get('/login', loginCheck, login )
router.post('/login' ,loginValidator, processLogin)
router.get('/logout' , logout)

router.get('/register' , register )
router.post('/register', upload.single('avatar') , registerValidator, processRegister)

router.get('/profile' , profile)
router.post('/profile' , processProfile )


module.exports = router;
