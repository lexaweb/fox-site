import $ from "jquery";
import '@fancyapps/fancybox';
import Swiper from "swiper";

$(document).ready(() => {


  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

$(document).ready(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');
    $('.header-menu-all').toggleClass('active');
    var width = $('.header-menu-all').width();
    $(".hamburger").css('right', 120 + $(".header-menu-all").width());
    // if () {
    //   alert( 'Да вы знаток!' );
    // } else {
    //   alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
    // }
  });
});
