var express = require('express');
var router = express.Router();


const {login , register, processRegister ,profile,} = require("../controllers/usersControllers")

/* /users. */
router.get('/login', login )

router.get("/register" , register )

router.post('/register', processRegister)

router.get('/profile' , profile)

router.post('/profile' , )


module.exports = router;
