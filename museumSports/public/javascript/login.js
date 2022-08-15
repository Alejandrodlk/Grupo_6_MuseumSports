console.log('login.js success!');


const $ = (element) => document.getElementById (element);
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;


$('email').addEventListener('blur', async function() {

    switch (true) {
        case !this.value.trim():
            $('error-email').innerHTML = "Debes ingresar tu email";
            this.classList.add('is-invalid')
            break;
        case  !regExEmail.test(this.value.trim()):
            $('error-email').innerHTML = "El email tiene un formato incorrecto";
            this.classList.add('is-invalid')
            break 
            case await verifyEmail(this.value.trim()) :
            $('errorEmail').innerHTML = "¡El email ya se encuentra registrado!";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid')
            $('error-email').innerHTML = null
            break;
    }

});


$('password').addEventListener('blur', function() {

    switch (true) {
        case !this.value.trim():
            this.classList.add('is-invalid');
            $('errorPassword').innerHTML = "Debes ingresar tu contraseña"
            break;
        default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            $('errorPassword').innerHTML = null
            break;
    }

})



$('container-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    let elements = e.target.elements;
    let error = false;

    for (let i = 0; i < elements.length - 2; i++) {
        if(!elements[i].value.trim()){
            elements[i].classList.add('is-invalid');
            error = true;
            $('error-pass').innerHTML = "Los campos señalados son obligatorios"
        }
    }

    for (let i = 0; i < elements.length - 2; i++) {
        if(elements[i].classList.contains('is-invalid')){
            error = true
        }
    }

    !error && e.target.submit()


})