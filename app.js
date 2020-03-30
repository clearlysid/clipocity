const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];


window.addEventListener('DOMContentLoaded', () => {
    // function waits for all the images to load before initiating the timeout
    imagesLoaded( 'body', { background: true }, function() {
        setTimeout(() => {
            header.classList.remove('fade');
            main.classList.remove('fade');
        }, 2000);
    });  
});