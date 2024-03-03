AOS.init();
let changeIcon = function (icon) {
  icon.classList.toggle("fa-xmark");
};

$(document).ready(function () {
  $("#navbar-toggle").click(function () {
    $(".navbar-responsive").slideToggle();
  });

  // phần mới
  function hide_responsive_menu() {
    $(".navbar-responsive").slideUp();
    // $(".navbar-responsive .prod-mobile").slideUp();
    $(".responsive-menu-toggle").removeClass("open");
  }

  $(window).resize(function () {
    hide_responsive_menu();
  });

  $(window).scroll(function () {
    hide_responsive_menu();
  });


  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  $(".text-capitalize").click(function ($event) {
    // $event.preventDefault();
    $(this).addClass("active-menu").siblings().removeClass("active-menu");
  });
});
