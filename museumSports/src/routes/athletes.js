var express = require('express');
var router = express.Router();

const {all} = require('../controllers/athletesController')

router.get('/all' , all)

module.exports = router