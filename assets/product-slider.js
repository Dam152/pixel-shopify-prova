import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".product-image-slider", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 16,
});
