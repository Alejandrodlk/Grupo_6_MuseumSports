console.log('register.js success');

const regExLetter = /^[A-Z]+$/i;
const regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;



const verifyEmail = async (email) => {
    try {
        let response = await fetch('/users/api/check-email', {
            method : 'POST',
            body : JSON.stringify({
                email : email
            }),
            headers : {
                'Content-Type': 'application/json' 
            }
            
        })
        let result = await response.json();
        return result.data;
       
    } catch (error) {
        console.error
    }
}






$('name').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorNombre').innerHTML = "Debes ingresar tu nombre";
            this.classList.add('is-invalid')
            break;
        case !regExLetter.test(this.value.trim()):
            $('errorNombre').innerHTML = "Solo caracteres alfabéticos";
            this.classList.add('is-invalid')
            break
        case this.value.trim().length < 2 || this.value.trim().length > 255 :
            $('errorNombre').innerHTML = "El nombre debe tener como mínimo 2 caracteres";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorNombre').innerHTML = null;
            break;
    }
});


$('lastName').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorApellido').innerHTML = "Debes ingresar tu apellido";
            this.classList.add('is-invalid')
            break;
        case !regExLetter.test(this.value.trim()):
            $('errorApellido').innerHTML = "Solo caracteres alfabéticos";
            this.classList.add('is-invalid')
            break
        case this.value.trim().length < 2 || this.value.trim().length > 255 :
            $('errorApellido').innerHTML = "El apellido debe tener como mínimo 2 caracteres";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorApellido').innerHTML = null;
            break;
    }
});


$('email').addEventListener('blur', async function(){

    switch (true) {
        case !this.value.trim():
            $('errorEmail').innerHTML = "Debes ingresar tu email";
            this.classList.add('is-invalid')
            break;
        case !regExEmail.test(this.value.trim()):
            $('errorEmail').innerHTML = "El email tiene un formato inválido";
            this.classList.add('is-invalid')
            break
        case await verifyEmail(this.value.trim()) :
            $('errorEmail').innerHTML = "¡El email ya se encuentra registrado!";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorEmail').innerHTML = null;
            break;
    }
});

$('password').addEventListener('blur', async function(){

    switch (true) {
        case !this.value.trim():
            $('errorPassword').innerHTML = "Debes ingresar una contraseña";
            this.classList.add('is-invalid')
            break;
        case !regExPass.test(this.value.trim()):
            $('errorPassword').innerHTML = "La contraseña debe tener entre 6 y 12 caracteres, un número, una mayúscula y un caracter especial";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorPassword').innerHTML = null;
            break;
    }
})


$('password2').addEventListener('blur', async function(){

    switch (true) {
        case !this.value.trim():
            $('errorPassword2').innerHTML = "Debes corroborar tu contraseña";
            this.classList.add('is-invalid')
            break;
        case this.value.trim() !== $('password').value.trim():
            $('errorPassword2').innerHTML = "Las contraseñas no coinciden";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorPassword2').innerHTML = null;
            break;
    }
});



$('bases').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let elements = this.elements;
    let error = false;

    for (let i = 0; i < elements.length - 2; i++) {
        if(!elements[i].value){
            elements[i].classList.add('is-invalid');
            error = true;
            $('msgError').innerHTML = "Los campos señalados son obligatorios";
            error = true
        }
    }

    for (let i = 0; i < elements.length - 2; i++) {
       
        if(elements[i].classList.contains('is-invalid')){
            error = true
        }
    }

    if(!$('terms').checked){
        $('terms').classList.add('is-invalid')
        $('errorTerms').innerHTML = "Debes aceptar las bases y condiciones"
        error = true
    }

    if(!error){
        $('msgError').innerHTML = null;
        this.submit()
    }
})
