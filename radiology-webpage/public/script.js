let mainNav = document.getElementById("js-menu");
let navBar = document.getElementById("navbar")
let navBarToggle = document.querySelector("#js-navbar-toggle");

navBarToggle.addEventListener('click', function() {
mainNav.classList.toggle("active");
navBar.classList.toggle("expanded");
});

// window.addEventListener('click', function() {
//     alert('Hello')
// })