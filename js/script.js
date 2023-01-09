var swiper = new Swiper(".swiper-container_1", {
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      // when window width is <= 499px
      499: {
        slidesPerView: 6,
      },
  
      999: {
        slidesPerView: 8,
      },
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".swiper-container_2", {
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      // when window width is <= 499px
      499: {
        slidesPerView: 6,
      },
  
      999: {
        slidesPerView: 8,
      },
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });