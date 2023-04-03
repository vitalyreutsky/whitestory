// Подключение свайпера
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  EffectFlip,
  EffectFade,
  Thumbs,
} from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, Keyboard, EffectFade, Thumbs]);
const swiperAbout = new Swiper(".swiper-about", {
  autoplay: true,
  slidesPerView: 1,
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

const swiperTop = new Swiper(".top-swiper", {
  autoplay: true,
  slidesPerView: 1,
  //  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 2000,
  },
  speed: 1500,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
