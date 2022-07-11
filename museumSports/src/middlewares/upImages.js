const multer = require('multer');
const path = require('path');

/* MULTER PRODUCTS*/
const storageImageProducts = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,"public/images/products")
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-Product-' + Date.now() + path.extname(file.originalname))
    }
})
const uploadImageProducts = multer({
    storage : storageImageProducts
});


/* MULTER USERS*/
const storageImageUsers = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,"public/images/users")
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-User-' + Date.now() + path.extname(file.originalname))
    }
})
const uploadImageUsers = multer({
    storage : storageImageUsers
});


/* MULTER ATHLETES*/
const storageImageAthletes = multer.diskStorage({
    destination : (req,file,callback) => {
        callback(null,"public/images/athletes")
    },
    filename : (req,file,callback) => {
        callback(null,file.fieldname + '-Athlete-' + Date.now() + path.extname(file.originalname))
    }
})
const uploadImageAthletes = multer({
    storage : storageImageAthletes
});

module.exports = {uploadImageProducts , uploadImageUsers , uploadImageAthletes}