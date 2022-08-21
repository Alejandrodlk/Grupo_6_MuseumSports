const switchToggle = document.getElementById("switch"),
    switchToggleImage = document.getElementById("switchToggleImage"),
    container = document.getElementById("container");

let switchState = true;

switchToggle.addEventListener("click", (e) => {
    container.classList.toggle("dark");

    if (switchState) {
        switchToggleImage.src = "/images/img/moon.png";
        switchState = !switchState;
    } else {
        switchToggleImage.src = "/images/img/sun.png";
        switchState = !switchState;
    }
});


