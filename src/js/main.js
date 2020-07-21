import $ from "jquery";
import "@fancyapps/fancybox";
import Swiper from "swiper";
import "../js/libs/parsley.min.js";

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".header-menu-all").toggleClass("active");
    $(".hamburger").css("right", 120 + $(".header-menu-all").width());
    if (!$(this).hasClass("active")) {
      $(this).css("right", 0);
    }
  });

  $(".cb-form_text").keyup(function () {
    let el = $(this).parent();
    if ($(this).val()) {
      el.addClass("success");
      el.removeClass("error");
    } else {
      el.addClass("error");
      el.removeClass("success");
    }
  });
});

function validator() {
$("#form").parsley();

Parsley.addMessages("ru", {
  defaultMessage: "Некорректное значение.",
  type: {
    email: "Введите адрес электронной почты.",
    url: "Введите URL адрес.",
    number: "Введите число.",
    integer: "Введите целое число.",
    digits: "Введите только цифры.",
    alphanum: "Введите буквенно-цифровое значение.",
  },
  notblank: "Это поле должно быть заполнено.",
  required: "Обязательное поле.",
  pattern: "Это значение некорректно.",
  min: "Это значение должно быть не менее чем %s.",
  max: "Это значение должно быть не более чем %s.",
  range: "Это значение должно быть от %s до %s.",
  minlength: "Это значение должно содержать не менее %s символов.",
  maxlength: "Это значение должно содержать не более %s символов.",
  length: "Это значение должно содержать от %s до %s символов.",
  mincheck: "Выберите не менее %s значений.",
  maxcheck: "Выберите не более %s значений.",
  check: "Выберите от %s до %s значений.",
  equalto: "Это значение должно совпадать.",
});

Parsley.setLocale("ru");
};