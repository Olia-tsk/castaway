$(".burger").click(function () {
  $(this).toggleClass("open");
  $(".header-mobile").toggleClass("open");
  $("body").toggleClass("overflow");
});
