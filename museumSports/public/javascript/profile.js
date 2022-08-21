console.log('profile.js success');

const regExLetter = /^[A-Z]+$/i;





$('name').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorNombre').innerHTML = "Debes ingresar tu nombre";
            this.classList.add('is-invalid')
            break;
            case !regExLetter.test(this.value.trim()):
            $('errorNombre').innerHTML = "Solo caracteres alfabéticos";
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 3 || this.value.trim().length > 255 :
            $('errorNombre').innerHTML = "El nombre debe tener como mínimo 3 caracteres";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorNombre').innerHTML = null;
            break;
    }
});


$('surname').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorApellido').innerHTML = "Debes ingresar tu apellido";
            this.classList.add('is-invalid')
            break;
            case !regExLetter.test(this.value.trim()):
            $('errorApellido').innerHTML = "Solo caracteres alfabéticos";
            this.classList.add('is-invalid')
            break;
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


$('country').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorPais').innerHTML = "Debes ingresar tu país o región";
            this.classList.add('is-invalid')
            break;
            case !regExLetter.test(this.value.trim()):
            $('errorPais').innerHTML = "Solo caracteres alfabéticos";
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 2 || this.value.trim().length > 255 :
            $('errorPais').innerHTML = "El país o región debe tener como mínimo 2 caracteres";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorPais').innerHTML = null;
            break;
    }
});

$('local').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorLocalidad').innerHTML = "Debes ingresar tu localidad";
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 2 || this.value.trim().length > 255 :
            $('errorLocalidad').innerHTML = "La localidad debe tener como mínimo 2 caracteres";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorLocalidad').innerHTML = null;
            break;
    }
});


$('direction').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorDireccion').innerHTML = "Debes ingresar tu dirección";
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 2 || this.value.trim().length > 255 :
            $('errorDireccion').innerHTML = "La dirección debe tener como mínimo 2 caracteres";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorDireccion').innerHTML = null;
            break;
    }
});



$('container-profile').addEventListener('submit', (e) => {
    e.preventDefault();
    
    let elements = e.target.elements;
    let error = false;

    for (let i = 0; i < elements.length - 3; i++) {
        if(!elements[i].value.trim()){
            elements[i].classList.add('is-invalid');
            error = true;
            $('error-password').innerHTML = "Los campos señalados son obligatorios";
            error = true
        }
    }

    for (let i = 0; i < elements.length - 2; i++) {
        if(elements[i].classList.contains('is-invalid')){
            error = true
        }
    }

    !error && e.target.submit()


})