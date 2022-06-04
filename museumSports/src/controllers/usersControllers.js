const fs = require('fs');
const path = require('path');


/* const readJSON = JSON.parse(fs.readFileSync("src/data/products.json" ,"utf8")) */

const readJSON = () => {
    const users = JSON.parse(fs.readFileSync("src/data/users.json", 'utf-8'));	
	return users
}

const saveJSON = (e) => fs.writeFileSync("src/data/users.json" , JSON.stringify(e,null,3))

module.exports = {

    register : (req,res) => {
        return res.render("register")
    },
    
    processRegister: (req, res) => {
        let users = readJSON();
        const {id, name, lastname, image, category, password, email} = req.body

        const newUser = {
            id: users[users.length - 1].id +1,
            name: name.trim(),
            lastname: lastname.trim(),
            email ,
            password ,
            image: "foto.jpg",
            category
        };

        users.push(newUser);

        saveJSON(users)

        res.redirect('/')
    }, 

    login : (req,res) => res.render("login"),

    profile : (req,res) =>{
        return res.send('perfil')
    },

    processProfile : (req,res) => {
        return res.send('perfil en proceso')
    }

   
}