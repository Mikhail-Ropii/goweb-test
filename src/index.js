const contactForm = document.querySelector('.contact-form');
const submitBtn = contactForm.querySelector('.submit-btn');
const email = contactForm.querySelector('[name="email"]');
const errorMessage = contactForm.querySelector('.error-message');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!email.value) {
    errorMessage.classList.add('visible');
  }
});

email.addEventListener('input', function (e) {
  if (email.value) {
    errorMessage.classList.remove('visible');
  }
});
