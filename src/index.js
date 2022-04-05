import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';
import './index.html';

import $ from 'jquery';

$('.box').html('Hello');

import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3
      }
    }
});

var swiper = new Swiper(".trendsSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3
    }
  }
});

var swiper = new Swiper(".categorySwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function countUp(){
  var total = parseInt(document.getElementById("count").value, 10);
  total = isNaN(total) ? 0 : total;
  total ++;
  document.getElementById('count').value = total;
  document.getElementById('count').innerHTML = total;
}
function countDown(){
  var total = parseInt(document.getElementById("count").value, 10);
  total = isNaN(total) ? 0 : total;
  total --;
  document.getElementById('count').value = total;
  document.getElementById('count').innerHTML = total;
}


// Счетчик
document.addEventListener("click", function (e) {
  let targetElement = e.target;
  if (targetElement.closest('.quantity__button')) {
   console.log(targetElement.closest('.quantity').querySelector('input').value);
   if (targetElement.closest('.quantity').querySelector('input').value == '' && (targetElement.classList.contains('quantity__button_plus') || targetElement.classList.contains('quantity__button_minus'))) {
    targetElement.closest('.quantity').querySelector('input').value = 0;
   }
   let value = parseInt(targetElement.closest('.quantity').querySelector('input').value);
   if (targetElement.classList.contains('quantity__button_plus')) {
    value++;
   } else {
    --value;
    if (value < 0) value = 0;
   }
   targetElement.closest('.quantity').querySelector('input').value = value;
  }
 });