// Get the video
var video = document.getElementById("header-screen__video");

// Get the button
var btn = document.getElementById("headerBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "<i class='fas fa-pause'></i>";
    } else {
        video.pause();
        btn.innerHTML = "<i class='fas fa-play'></i>";
    }
}