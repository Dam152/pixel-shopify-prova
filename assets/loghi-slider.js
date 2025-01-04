import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".loghi-swiper", {
  speed: 500,
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  allowTouchMove: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },

    640: {
      slidesPerView: 2,
    },

    0: {
      slidesPerView: 1.5,
    },
  },
});
