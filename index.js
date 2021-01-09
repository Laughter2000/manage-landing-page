var email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");
const intro = document.querySelector(".intro");

// Form Validation
const input = document.querySelector(".footer__input");
const form = document.querySelector(".footer__form");
const formError = document.querySelector(".footer__error");

var slideIndex = 0;
showSlides();

function showSlides() {
  //SlideShow
  var slideElement = document.getElementsByClassName("testimonial");
  var dot = document.getElementsByClassName("testimonial__dot");
  var i;
  for (i = 0; i < slideElement.length; i++) {
    slideElement[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slideElement.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("testimonial__dot--active");
  }

  slideElement[slideIndex - 1].style.display = "block";
  dot[slideIndex - 1].classList.add("testimonial__dot--active");
  setTimeout(showSlides, 5000);
}

const toggleMenu = () => {
  var overlay = document.createElement("div");
  overlay.classList.add("overlay");
  if (!nav.classList.contains("header__nav--toggle")) {
    menu.src = "./images/icon-close.svg";
    nav.classList.add("header__nav--toggle");
    body.style.overflow = "hidden";
    body.appendChild(overlay);
  } else {
    menu.src = "./images/icon-hamburger.svg";
    nav.classList.remove("header__nav--toggle");
    body.style.overflow = "initial";
    var over = document.querySelector(".overlay");
    over.remove();
  }
};

const validateEmail = (e) => {
  e.preventDefault();
  if (!email.test(input.value)) {
    input.classList.add("footer__incorrect");
    formError.classList.remove("display--none");
  } else {
    input.classList.remove("footer__incorrect");
    formError.classList.add("display--none");
  }
};

menu.addEventListener("click", toggleMenu);
form.addEventListener("submit", validateEmail);
