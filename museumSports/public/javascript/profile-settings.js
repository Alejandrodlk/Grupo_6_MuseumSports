const viewOverral = document.querySelector('.general');
const viewNews = document.querySelector('.news');
const viewRecord = document.querySelector('.record');
const viewSecurity = document.querySelector('.security');

const settings = document.querySelector('.box_go_back');

//   Evento
viewOverral.addEventListener("click", generalAdjustments);
//   Function
function generalAdjustments() {
    viewOverral.classList.toggle('aside_profile');
    settings.classList.toggle('setting_profile')    
    
}