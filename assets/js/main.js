jQuery(document).ready(function ($) {
  // Initialize AOS start
  AOS.init({ once: true });
  // Initialize AOS end

  // hamburger menu start
  const menu = $(".menu");
  const hamburgerMenu = $(".hamburger-menu");

  hamburgerMenu.on("click", function () {
    menu.toggleClass("active");
  });
  // hamburger menu end


  // about sec class toggle start
  function isElementInView(element) {
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }
  function checkInViewAndAddClass() {
    var targetSection = $('.hero-sec'); // Change this selector to your specific section

    if (isElementInView(targetSection)) {
      setTimeout(() => {
        $('.hero-sec').addClass('active');
        setTimeout(() => {
          $('.hero-sec .ship-img').addClass('active');
        }, 1000);
      }, 2000);
    }
  }
  checkInViewAndAddClass();
  $(window).on('scroll', function () {
    checkInViewAndAddClass();
  });
  // about sec class toggle end


  // $(".brand-slider").slick({
  //   autoplay: true,
  //   infinite: true,
  //   slidesToShow: 6,
  //   responsive: [{
  //     breakpoint: 991,
  //     settings: {
  //       slidesToShow: 4
  //     }

  //   }, {

  //     breakpoint: 767,
  //     settings: {
  //       slidesToShow: 3
  //     }

  //   }, {

  //     breakpoint: 576,
  //     settings: {
  //       slidesToShow: 2
  //     }
  //   }]
  // });

  var testimonialSwiper = new Swiper(".landing-testimonial-slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      991: {
        centeredSlides: false,
      }
    }
  });

  var packagesSwiper = new Swiper(".packages-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 38,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows: true,
    }
  });
});

