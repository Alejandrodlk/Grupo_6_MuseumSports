const express = require("express")
const router = express.Router()

const {create , store, edit , update , remove , cart , detail , all } = require("../controllers/productsController")


/* /products */


router.get("/detail" , detail )


router.get("/create" , create)
router.post("/create" , store)

router.get("/edit/:id" , edit)
router.put("/update/:id" , update )

router.delete("/remove" , remove)

router.get("/cart" , cart )

router.get("/all" , all)

module.exports = router;