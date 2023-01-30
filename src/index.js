const contactForm = document.querySelector('.contact-form');
const email = contactForm.querySelector('[name="email"]');
const errorMessage = contactForm.querySelector('.error-message');

document.querySelector('.header-menu').addEventListener('click', function (e) {
  e.preventDefault();
  const href = e.target.getAttribute('href').substring(1);
  const section = document.getElementById(href);
  const headerHeight = document.querySelector('.header').offsetHeight;
  const sectionPosition = section.getBoundingClientRect().top;
  const scrollPosition = sectionPosition - headerHeight;

  window.scrollBy({
    top: scrollPosition,
    behavior: 'smooth',
  });
});

document.querySelector('.hero-btn').addEventListener('click', function (e) {
  e.preventDefault();
  const section = document.getElementById('about');
  const headerHeight = document.querySelector('.header').offsetHeight;
  const sectionPosition = section.getBoundingClientRect().top;
  const scrollPosition = sectionPosition - headerHeight;

  window.scrollBy({
    top: scrollPosition,
    behavior: 'smooth',
  });
});

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!email.value) {
    errorMessage.classList.add('visible');
    return;
  }
  const myForm = e.target;
  const formData = new FormData(myForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert('Thank you for your submission'))
    .catch(error => alert(error));
});

email.addEventListener('input', function (e) {
  if (email.value) {
    errorMessage.classList.remove('visible');
  }
});

window.addEventListener('scroll', function () {
  const headerHeight = document.querySelector('.header').offsetHeight;
  if (window.scrollY > headerHeight) {
    document.querySelector('.header').classList.add('header-scroll');
  } else {
    document.querySelector('.header').classList.remove('header-scroll');
  }
});
