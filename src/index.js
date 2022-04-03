import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';
import './index.html';

import $ from 'jquery';

$('.box').html('Hello');

import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper(".categorySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});