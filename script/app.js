let darkModeBtn = document.getElementById(`dark-mode-btn`);
const header = document.querySelector('.header');

darkModeBtn.onclick = function(){
    document.body.classList.toggle(`dark-mode`);
}


window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    header.style.backgroundPositionY = offset * 0.05 + "px"
})