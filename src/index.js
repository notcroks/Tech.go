import 'normalize.css'
import 'swiper/css';
import './styles/main.scss';
import './index.html';

import $ from 'jquery';

$('.box').html('Hello');

var swiper = new Swiper(".categorySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});