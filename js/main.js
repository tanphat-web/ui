const navbar = document.querySelector("nav.navbar");
const hamburger = document.querySelector(".header__button-hamburger");
const body = document.body;
const buttonScrollTop = document.querySelector(".back-to-top");
const buttonCart = document.querySelector(".header__button-cart");
const cart = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");
const buttonDropdownMenu = navbar.querySelectorAll(".list__item .nav__link");
const header = document.querySelector("header");
const clientHeight = header.clientHeight;
buttonDropdownMenu.forEach((item) => {
  const elem = `<div class="button">
    <span>+</span>
    <span>-</span>
  </div>`;
  if (item.nextElementSibling !== null) item.innerHTML += elem;
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (item.nextElementSibling) {
      item.nextElementSibling.classList.toggle("active");
      e.target.classList.toggle("active");
    }
  });
});

function toggleMenu() {
  body.classList.toggle("menu-show");
}
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
function showButtonScrollTop() {
  if (window.scrollY >= 300) {
    buttonScrollTop.classList.add("active");
    navbar.classList.add("active");
  } else {
    buttonScrollTop.classList.remove("active");
    navbar.classList.remove("active");
  }
}

function headerFixed() {
  if (window.scrollY > clientHeight + 70) header.classList.add("fixed");
  else header.classList.remove("fixed");
}
function toggleCart() {
  cart.classList.toggle("show");
  buttonCart.classList.toggle("show");
  overlay.classList.toggle("active");
  body.classList.toggle("hidden");
}

hamburger.addEventListener("click", toggleMenu);
buttonScrollTop.addEventListener("click", scrollTop);
document.addEventListener("scroll", () => {
  showButtonScrollTop();
  headerFixed();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!navbar.contains(target) && !hamburger.contains(target))
    body.classList.remove("menu-show");
  if (!buttonCart.contains(target) && !cart.contains(target)) {
    cart.classList.remove("show");
    buttonCart.classList.remove("show");
    overlay.classList.remove("active");
    body.classList.remove("hidden");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) console.log("first");
});

buttonCart.addEventListener("click", toggleCart);

// const flickityCarousel = {
//   init: function () {
//     this.products();
//     this.productDetail();
//     this.news();
//     this.hero();
//   },
//   hero: function () {
//     const heroCarousel = document.querySelector(".hero__carousel");
//     const flktyHero = new Flickity(heroCarousel, {
//       // options
//       cellAlign: "left",
//       contain: false,
//       pageDots: false,
//       prevNextButtons: true,
//       friction: 0.6,
//       wrapAround: true,
//       fullscreen: true,
//       autoPlay: 5000,
//     });
//   },
//   products: function () {
//     const productsCarousel = document.querySelectorAll(".products");
//     productsCarousel.forEach((element) => {
//       const attributeId = element.getAttribute("id");
//       const elemId = document.querySelector(
//         `#${attributeId} .products__main .products__main-carousel`
//       );
//       carousel(elemId);
//     });
//     function carousel(e) {
//       const flktyProducts = new Flickity(e, {
//         cellAlign: "left",
//         contain: true,
//         pageDots: false,
//         freeScroll: false,
//         prevNextButtons: true,
//         cellAlign: "left",
//       });
//     }
//   },
//   news: function () {
//     const newsCarousel = document.querySelector(".news__carousel");
//     const flktyNews = new Flickity(newsCarousel, {
//       cellAlign: "left",
//       contain: true,
//       pageDots: false,
//       freeScroll: false,
//       prevNextButtons: true,
//       cellAlign: "left",
//     });
//   },
//   productDetail: function () {
//     const productDetailCarousel = document.querySelector(
//       ".detail__main-img .carousel"
//     );
//     const nav = document.querySelector(".detail__main-img .carousel__nav");
//     const flkty = new Flickity(productDetailCarousel, {
//       cellAlign: "left",
//       contain: false,
//       pageDots: false,
//       prevNextButtons: true,
//       wrapAround: true,
//       fullscreen: true,
//       autoPlay: false,
//     });
//     const flktyNav = new Flickity(nav, {
//       asNavFor: productDetailCarousel,
//       contain: true,
//       pageDots: false,
//       prevNextButtons: false,
//     });
//   },
// };

// // Initialize the Flickity carousel
// flickityCarousel.init();
