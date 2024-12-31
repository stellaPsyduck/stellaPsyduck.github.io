window.addEventListener('load', function() {
    $("#navbar-container").load("../html/navbar.html");
});

document.getElementById('resume-button').addEventListener('click', function() {
    window.open('../images/W24_Resume.pdf', '_blank');
  });