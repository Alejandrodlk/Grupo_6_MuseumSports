var express = require('express');
var router = express.Router();

const {categoryDetail} = require('../controllers/categoriesController')

router.get('/detail/:id' , categoryDetail)

module.exports = router