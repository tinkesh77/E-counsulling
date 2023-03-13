// alert("Hello  ");
$(document).ready(function() {
  $(".slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
const toggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('#menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
window.onscroll = function() {
  var header = document.querySelector("header");
  var scroll = window.pageYOffset;
  header.style.backgroundColor = `rgba(255, 255, 255, ${1 - scroll / 500})`;
};
$(document).ready(function() {
  $(".slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
const sliderContainer = document.querySelector('.slider-container');
const slider = sliderContainer.querySelector('.slider');
const sliderTrack = slider.querySelector('.slider-track');
const sliderItems = slider.querySelectorAll('.slider-item');
const buttonLeft = sliderContainer.querySelector('.slider-button-left');
const buttonRight = sliderContainer.querySelector('.slider-button-right');

let currentIndex = 0;
let visibleItems = 3;
let maxIndex = sliderItems.length - visibleItems;
let trackWidth = 0;

sliderItems.forEach(item => {
  trackWidth += item.offsetWidth;
});

sliderTrack.style.width = `${trackWidth}px`;
slider.style.width = `${visibleItems * sliderItems[0].offsetWidth}px`;

buttonLeft.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * sliderItems[0].offsetWidth}px)`;
    updateButtons();
  }
});

buttonRight.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * sliderItems[0].offsetWidth}px)`;
    updateButtons();
  }
});

function updateButtons() {
  buttonLeft.disabled = currentIndex === 0;
  buttonRight.disabled = currentIndex === maxIndex;
}

updateButtons();
