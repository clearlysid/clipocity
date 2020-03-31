const header = document.getElementsByTagName('header')[0];
const main = document.getElementsByTagName('main')[0];
const modeSwitch = document.getElementById('mode-switch');


window.addEventListener('DOMContentLoaded', () => {
    // function waits for all the images to load before initiating the timeout
    imagesLoaded( 'body', { background: true }, function() {
        setTimeout(() => {
            header.classList.remove('fade');
            main.classList.remove('fade');
        }, 2000);
    });  
});

modeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    modeSwitch.classList.toggle('on');
});


// I had to add this part below because I couldn't get the video to scale correctly on mobile devices
// My temporary solution to that is to simply change the source of the video on width < 800px


function changeVideoSource() {
    if(window.innerWidth <= 800){
        document.getElementsByTagName('video')[0].src = "assets/featured-video-mobile.mp4" // portrait video
    } else {
        document.getElementsByTagName('video')[0].src = "assets/featured-video.mp4" // landscape video
    }
}


window.addEventListener("resize", changeVideoSource);

// the above line does work, but cause flickering as the browser is being resized.
// If I was deploying to production, I think I would omit the line and maybe use a variable to detect the state change

changeVideoSource();