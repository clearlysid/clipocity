const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];


window.addEventListener('DOMContentLoaded', () => {
    imagesLoaded( 'body', { background: true }, function() { // function waits for all the images to load before initiating the timeout
        setTimeout(() => {
            header.classList.remove('fade');
            main.classList.remove('fade');
        }, 3000);
    });  
});