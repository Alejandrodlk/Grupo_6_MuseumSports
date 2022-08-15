const express = require("express")
const router = express.Router()

const {uploadImageProducts} = require('../middlewares/upImages');
const productsAddCheck = require('../middlewares/productsAddCheck');
const productsEditCheck = require('../middlewares/productsEditCheck');

const productAddValidator = require('../validations/productAddValidator')

const {create , store, edit , update , remove , cart , detail , all ,} = require("../controllers/productsController")


/* /products */


router.get("/detail/:id" , detail )


router.get("/create" , productsAddCheck, create)
router.post("/create", uploadImageProducts.array("images") , productAddValidator, store)

router.get("/edit/:id" , productsEditCheck, edit)
router.put("/update/:id", uploadImageProducts.single("images") , update )

router.delete("/remove/:id" , remove)

router.get("/cart" , cart )

router.get("/all" , all)



module.exports = router;