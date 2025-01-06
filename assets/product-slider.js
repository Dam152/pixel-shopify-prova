import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".product-image-slider-thumb", {
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 16,
    },
    640: {
      direction: "horizontal",
      slidesPerView: 3,
      spaceBetween: 16,
    },
    0: {
      direction: "horizontal",
      slidesPerView: 3,
      spaceBetween: 12,
    },
  },
});

const swiper2 = new Swiper(".product-image-slider", {
  freeMode: true,
  spaceBetween: 16,
  thumbs: {
    swiper: swiper,
  },
  allowTouchMove: false,
});
