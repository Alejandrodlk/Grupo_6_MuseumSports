var express = require('express');
var router = express.Router();


const {login , register , formulario} = require("../controllers/usersControllers")

/* /users. */
router.get('/login', login )

router.get("/register" , register )

router.get("/formulario" , formulario)


module.exports = router;
