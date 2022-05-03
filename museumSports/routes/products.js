const express = require("express")
const router = express.Router()

const {detail , cart} = require("../controllers/productsController")


/* /products */
router.get("/detail" , detail )

router.get("/cart" , cart )

module.exports = router;