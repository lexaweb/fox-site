import $ from "jquery";
import "@fancyapps/fancybox";
import Swiper from "swiper";

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".header-menu-all").toggleClass("active");
    $(".hamburger").css("right", 120 + $(".header-menu-all").width());
    if (!$(this).hasClass("active")) {
      $(this).css("right", 0);
    }
  });
});
