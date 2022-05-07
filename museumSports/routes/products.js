const express = require("express")
const router = express.Router()

const {detail , cart , formulario , edit} = require("../controllers/productsController")


/* /products */
router.get("/detail" , detail )

router.get("/cart" , cart )

router.get("/agregarProducto" , formulario)

router.get("/editarProducto" , edit)

module.exports = router;