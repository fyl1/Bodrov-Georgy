document.addEventListener('DOMContentLoaded', function () {


  const modalBtns = document.querySelectorAll('.works-card');
  const modalOverlay = document.querySelectorAll('.modal-wrapper');
  const modals = document.querySelectorAll('.modal');
  const btnСloseModal = document.querySelectorAll('.btn--close-modal');

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
  console.log(modals, "modals");

  modalBtns.forEach((el) => {
    console.log(el);

    el.addEventListener('click', (e) => {
      console.log(e.target, "e.target", e.currentTarget.getAttribute('data-path'));

      let path = e.currentTarget.getAttribute('data-path');
      el.classList.add('active')
      modals.forEach((el) => {
        el.classList.remove('modal--open');
      });
      console.log(`[data-target="${path}"]`, "[data-target=path]");
      document.querySelector(`[data-target="${path}"]`).classList.add('modal--open');

    });
  });

  btnСloseModal.forEach((el) => {
    el.addEventListener('click', (e) => {
      console.log(el, "el btnСloseModal")
      modals.forEach((el) => {
        el.classList.remove('modal--open');
        el.classList.remove('active');
      });
      el.classList.remove('modal--open');
      el.classList.remove('active');


    });
  });

  modals.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.currentTarget.classList.contains !== "modal-wrapper") {
        modals.forEach((el) => {
          console.log(el, "el e.currentTarget.classList.contains")
          el.classList.remove('modal--open');
          el.classList.remove('active');
        });
        el.classList.remove('modal--open');
        el.classList.remove('active');
      }

    });
  });
  document.addEventListener('click', e => console.log(e.target))
  // document.addEventListener('click', (e) => {
  // let ddd =  e.closest('.modal')
  // console.log(ddd, "ddd");
  // });
  // modalOverlay.forEach((el) => {
  //   el.addEventListener('click', (e) => {
  // 	console.log(e.target);

  // 	if (e.target == modalOverlay) {
  // 		modalOverlay.classList.remove('modal-overlay--visible');
  // 		modals.forEach((el) => {
  // 			el.classList.remove('modal--visible');
  // 		});
  // 	}
  // });
  // });
}, false);