const express = require("express")
const router = express.Router()

const upload = require('../middlewares/uploadImagesProducts');

const {create , store, edit , update , remove , cart , detail , all ,} = require("../controllers/productsController")


/* /products */


router.get("/detail/:id" , detail )


router.get("/create" , create)
router.post("/create", upload.single("image") , store)

router.get("/edit/:id" , edit)
router.put("/update/:id", upload.single("image") , update )

router.delete("/remove/:id" , remove)

router.get("/cart" , cart )

router.get("/all" , all)



module.exports = router;