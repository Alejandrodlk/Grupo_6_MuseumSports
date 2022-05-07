module.exports = {

    detail : (req,res) => res.render("productDetail"),

    cart : (req,res) => res.render("productCart"),

    formulario : (req,res) => res.render("productsAdd"),

    edit : (req,res) => res.render("productsEdit")

}