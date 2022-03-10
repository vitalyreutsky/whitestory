// Реализация бургер-меню
import { burger } from "./functions/burger";

// Реализация модального окна
import GraphModal from "graph-modal";
const modal = new GraphModal();

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

import { validateForms } from "./functions/validate-forms";
const rules1 = [
  {
    ruleSelector: ".form__input-name",
    rules: [
      {
        rule: "customRegexp",
        value: /^[A-zА-яЁё]+$/,
        errorMessage: "Введите только буквы",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Введите минимум 3 символов",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".form__input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "customRegexp",
        value: /[0-9]/,
        errorMessage: "Введите только буквы",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

const rules2 = [
  {
    ruleSelector: ".form__input-name",
    rules: [
      {
        rule: "customRegexp",
        value: /^[A-zА-яЁё]+$/,
        errorMessage: "Введите только буквы",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Введите минимум 3 символов",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".form__input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "customRegexp",
        value: /[0-9]/,
        errorMessage: "Введите только буквы",
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

const afterForm = () => {
  modal.close("modal");
  modal.open("modal-success");
};

validateForms(".form-1", rules1, afterForm);
validateForms(".form-2", rules2, afterForm);
