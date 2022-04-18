let desplegarCont = document.querySelectorAll('.deploy');

desplegarCont.forEach(desplegar => {
    desplegar.addEventListener('click', () => {
        
        desplegar.classList.toggle('open')

        let height = 0;

        let menu = desplegar.nextElementSibling;
        
        if(menu.clientHeight == "0") {
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`
    })
})