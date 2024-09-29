// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

// Side Navigation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  console.log("Menu button clicked");
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden"; // Disable scrolling
  scrollBtn.style.pointerEvents = "none";
}

cancelBtn.onclick = function() {
  console.log("Cancel button clicked");
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto"; // Enable scrolling
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto"; // Ensure scrolling is enabled
  });
}

// Function for form submission alert


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzRTwLcBhyV5RbD5-9PgDGd2jwynHS2gDENYlE_AjA-8o6NnTtDPgDQgAcm3vYPxUrj/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => form.reset())
      .catch(error => console.error('Error!', error.message))
      alert("Successfully submited...")
      form.reset()
       
  })

  // scroll reveal

ScrollReveal({
  distance:'100px',
  duration:3000,
  delay:250,
});

ScrollReveal().reveal('.about, .projects', { origin:'left'});
ScrollReveal().reveal('.skills, .services', { origin:'right'});
ScrollReveal().reveal('.contact', { origin:'top'});
 