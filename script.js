window.addEventListener("scroll", function(){
    var header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// JavaScript for the hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // Toggle active class for hamburger
});