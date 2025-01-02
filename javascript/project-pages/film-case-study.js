window.addEventListener('load', function() {
    $("#navbar-container").load("html/navbar.html");
});

// Create a video element
const video = document.createElement('video');
video.controls = true;  // Add controls to the video player

// Create a source element for the video
const source = document.createElement('source');
source.src = 'images/no-money/No Money V3.AVI';  // Path to your video file
source.type = 'video/AVI';  // Specify the video type

// Append the source to the video element
video.appendChild(source);

// Append the video to the video container in the HTML
document.getElementById('video-container').appendChild(video);