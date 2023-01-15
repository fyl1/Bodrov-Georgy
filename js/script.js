document.addEventListener('DOMContentLoaded', function() {


const modalBtns = document.querySelectorAll('.modal');
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


  modalBtns.forEach((el) => {
	el.addEventListener('click', (e) => {
    console.log(e.target);
		let path = e.currentTarget.getAttribute('data-path');
    el.classList.add('active')
		modals.forEach((el) => {
			el.classList.remove('modal--open');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--open');
	
	});
});
btnСloseModal.forEach((el) => {
  el.addEventListener('click', (e) => {
  modals.forEach((el) => {
    el.classList.remove('modal--open');
    el.classList.remove('active');
  });
});
});
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