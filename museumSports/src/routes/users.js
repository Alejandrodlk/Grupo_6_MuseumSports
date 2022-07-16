var express = require('express');
var router = express.Router();
const {uploadImageUsers} = require('../middlewares/upImages')

const registerValidator = require('../validations/registerValidator')
const loginValidator = require('../validations/loginValidator')
const loginCheck = require('../middlewares/loginCheck')


const {login,logout,processLogin, register, processRegister ,profile,processProfile} = require("../controllers/usersControllers")

/* /users */
router.get('/login', loginCheck, login )
router.post('/login' ,loginValidator, processLogin)
router.get('/logout' , logout)

router.get('/register' , register )
router.post('/register', uploadImageUsers.single('avatar') , registerValidator, processRegister)

router.get('/profile' , profile)
router.put('/update' ,uploadImageUsers.single('avatar'), processProfile )


module.exports = router;
