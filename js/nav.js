const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const tl = gsap.timeline({ paused: true });
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".close-menu");

tl.to(navMenu, {
  clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
  duration: 0.2,
  ease: Power2.easeInOut,
});

hamburger.addEventListener("click", () => {
  tl.play();
});

closeMenu.addEventListener("click", () => {
  tl.reverse();
});

const loadIn = gsap.timeline({
  defaults: { duration: 1, ease: Power2.ease },
});

const title = document.querySelector("#title h1");
const nav = document.querySelector("nav");
const mask = document.querySelectorAll(".mask p");

loadIn.from(nav, 0.8, {
  opacity: 0,
  y: "-20%",
});
loadIn.from(title, 0.5, {
  opacity: 0,
  x: "-10%",
});

loadIn.from(
  mask,
  1,
  {
    y: "-100%",
  },
  "< 0.5"
);

const inputs = document.querySelectorAll(".entry-area input");

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value.trim() !== "") {
      this.classList.add("has-text");
    } else {
      this.classList.remove("has-text");
    }
  });
});
