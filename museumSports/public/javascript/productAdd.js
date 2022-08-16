console.log('productAdd.js success');

const $ = (element) => document.getElementById (element);
const regExLetter = /^[A-Z]+$/i;





$('title').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorNombre').innerHTML = "Debes ingresar el nombre del producto";
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 15 || this.value.trim().length > 255 :
            $('errorNombre').innerHTML = "El nombre del producto debe tener como mínimo 15 caracteres";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorNombre').innerHTML = null;
            break;
    }
});


$('description').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorDescripción').innerHTML = "Debes ingresar una descripción del producto";
            this.classList.add('is-invalid')
            break;
        case this.value.trim().length < 2 || this.value.trim().length > 255 :
            $('errorDescripción').innerHTML = "La descripción debe tener como mínimo 30 caracteres";
            this.classList.add('is-invalid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorDescripción').innerHTML = null;
            break;
    }
});


$('price').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorPrecio').innerHTML = "Debes ingresar el precio del producto";
            this.classList.add('is-invalid')
            break;
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorPrecio').innerHTML = null;
            break;
    }
});

$('discount').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorDescuento').innerHTML = "Debes ingresar el descuento % del producto";
            this.classList.add('is-invalid')
            break;
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorDescuento').innerHTML = null;
            break;
    }
});


$('price').addEventListener('blur', function(){

    switch (true) {
        case !this.value.trim():
            $('errorPrecio').innerHTML = "Debes ingresar el precio del producto";
            this.classList.add('is-invalid')
            break;
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('errorPrecio').innerHTML = null;
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