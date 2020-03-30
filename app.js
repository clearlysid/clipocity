const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];



window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        header.classList.remove('fade');
        main.classList.remove('fade');
    }, 2000);
})