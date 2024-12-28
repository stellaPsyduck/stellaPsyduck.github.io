document.body.style.height = "0vh"; // Set a fixed height of the viewport

//on window load
window.addEventListener('load', function() {
  $("#navbar-container").load("../html/navbar.html", function() {

    // Once the navbar is loaded, trigger animations
    var name = document.querySelector('.name');
    var subtitle = document.querySelector('.subtitle');

    // Check if the elements exist before applying the visible class
    name.classList.add('visible');
    subtitle.classList.add('visible');
    
  });
});
