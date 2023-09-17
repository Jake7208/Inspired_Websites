const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
const mask = document.querySelectorAll(".mask p");
const expertise = document.querySelector("#expertise");
const scrollMask = document.querySelector(".mask h1");
const title = document.querySelector("#title h1");
const nav = document.querySelector("nav");

const loadIn = gsap.timeline({
  defaults: { duration: 1, ease: Power2.ease },
});

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

const tl2 = gsap.timeline();

tl2.fromTo(
  nav,
  {
    background: "var(--nav-color)",
    transition: "background 0.5s ease",
  },
  {
    background: "var(--background-trans-color)",
  }
),
  ">";

tl2.fromTo(
  expertise,
  {
    background: "var(--background-color)",
    transition: "background 0.5s ease",
  },
  {
    background: "var(--background-trans-color)",
  }
);

tl2.fromTo(
  scrollMask,
  {
    y: "100%",
  },
  {
    y: "0%",
  }
);

ScrollTrigger.create({
  animation: tl2,
  trigger: expertise,
  start: "top-=300 top",
  end: "bottom bottom",
  markers: true,
  scrub: true,
});
