window.addEventListener('load', function() {
    $("#navbar-container").load("html/navbar.html");
});

function addYouTubeVideo() {
    // Create the iframe element
    var iframe = document.createElement('iframe');

    // Set the YouTube video URL and attributes
    iframe.src = "https://youtu.be/O9DYApaLEDg";  // Replace with your YouTube video URL
    iframe.width = "560";  // Set width
    iframe.height = "315"; // Set height
    iframe.frameBorder = "0";  // Remove the frame border
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";  // Allow features
    iframe.allowFullscreen = true;  // Allow fullscreen

    // Append the iframe to the 'video-container' div
    document.getElementById("video-container").appendChild(iframe);
}

// Add the YouTube video when the page loads
window.onload = addYouTubeVideo;