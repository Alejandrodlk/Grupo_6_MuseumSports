var express = require('express');
var router = express.Router();

const {all} = require('../controllers/categoriesController')

router.get('/all' , all)

module.exports = router