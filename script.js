// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));

// Scroll reveal
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });
faders.forEach(fader => appearOnScroll.observe(fader));

// Typing effect in hero
const typingText = ["Frontend Developer", "Creative Designer", "Tech Enthusiast"];
let i = 0, j = 0, currentText = "", isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  currentText = typingText[i];
  typingElement.innerHTML = isDeleting ? currentText.substring(0, j--) : currentText.substring(0, j++);
  if (!isDeleting && j === currentText.length) { isDeleting = true; setTimeout(typeEffect, 1200); }
  else if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % typingText.length; setTimeout(typeEffect, 200); }
  else { setTimeout(typeEffect, isDeleting ? 80 : 120); }
}
typeEffect();

// Contact form demo
const form = document.querySelector('.contact-form');
form.addEventListener('submit', e => { e.preventDefault(); alert("Thank you! I'll contact you soon."); form.reset(); });
