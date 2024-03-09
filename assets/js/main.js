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
  $(".skip-now").click(function ($event) {
    // $event.preventDefault();
    document.querySelector(".popup-overlay").style.display = "none";
  });
  function checkCoutDown() {
    var countDownt = 10;
    window.myInterval = setInterval(function () {
      countDownt--;
      document.querySelector(".count-numner").innerText = countDownt + " (s)";
      if (countDownt <= 0) {
        clearInterval(myInterval);
        setTimeout(function () {
          document.querySelector(".popup-overlay").style.display = "none";
        }, 200);
      }
    }, 5000);
  }

  checkCoutDown();
});
