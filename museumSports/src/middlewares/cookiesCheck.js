module.exports = (req,res,next) => {

    if(req.cookies.museumSports){
        req.session.userLogin = req.cookies.museumSports
    }
    next()
}