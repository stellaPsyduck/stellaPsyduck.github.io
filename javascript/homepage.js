// Wait for the page to load fully
window.addEventListener('load', function() {
    // Select the element with the class "slide-in"
    var name = document.querySelector('.name');
    var subtitle = document.querySelector('.subtitle');
    
    // Add the "visible" class to trigger the slide-in animation
    name.classList.add('visible');
    subtitle.classList.add('visible');
  });