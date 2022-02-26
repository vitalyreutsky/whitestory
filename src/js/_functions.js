// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";

// Определение ширины экрана
//import { isMobile, isTablet, isDesktop } from "./functions/check-viewport";
//isMobile();
//isTablet();
//isDesktop();

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from "./functions/burger";

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
//import { enableScroll } from "./functions/disable-scroll";
//enableScroll();

// Реализация модального окна
import GraphModal from "graph-modal";
const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
//import { getHeaderHeight } from "./functions/header-height";
//getHeaderHeight();

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Navigation, Pagination, Autoplay, Keyboard } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, Keyboard]);
const swiperAbout = new Swiper(".swiper-about", {
  autoplay: true,
  slidesPerView: 2.6,
  slidesPerGroup: 1,
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1500,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

const swiperStudies = new Swiper(".swiper-studies", {
  autoplay: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 10,
  autoHeight: true,
  freeMode: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
  },
  speed: 1500,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// Подключение анимаций по скроллу
import AOS from "aos";
AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
