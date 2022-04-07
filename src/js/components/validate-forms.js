import { validateForms } from "../functions/validate-forms";
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
