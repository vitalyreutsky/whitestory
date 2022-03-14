import JustValidate from "just-validate";
import Inputmask from "inputmask";

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelectorAll(".form__input-tel");

  if (!form) {
    return false;
  }

  if (!rules) {
    return false;
  }

  telSelector.forEach((tel) => {
    if (tel) {
      const inputMask = new Inputmask("+375 (99) 999-99-99");
      inputMask.mask(tel);

      for (let item of rules) {
        if (item.tel) {
          item.rules.push({
            rule: "function",
            validator: function () {
              let phone = tel.inputmask.unmaskedvalue();
              return phone.length === 9;
            },
            errorMessage: item.telError,
          });
        }
      }
    }
  });

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    let formData = new FormData(ev.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    ev.target.reset();
  });
};
