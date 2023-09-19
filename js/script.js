const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);
const mask = document.querySelectorAll(".mask p");
const expertise = document.querySelector("#expertise");
const scrollMask = document.querySelector(".expertise-title");
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
  scrollMask,
  {
    y: "-100%",
  },
  {
    y: "0%",
  }
);

ScrollTrigger.create({
  animation: tl2,
  trigger: expertise,
  start: "top-=100% top",
  end: "bottom bottom",
  // markers: true,
  scrub: 1,
});
const body = document.querySelector("body");

const tl3 = gsap.timeline({ paused: true });

tl3.fromTo(
  scrollMask,
  {},
  {
    y: "100%",
  }
);

ScrollTrigger.create({
  animation: tl3,
  trigger: expertise,
  start: "top top",
  end: "bottom bottom",
  // markers: true,
  scrub: 1,
});

const cont = document.querySelector(".content-wrapper");
// const stats = document.querySelector("#stats");
const video = document.querySelector(".video");
const videoCont = document.querySelector(".video-container");

gsap.to(video, {
  scrollTrigger: {
    trigger: videoCont, // Use the video-container as the trigger
    start: "top-=80px top", // Pin the video when the top of the video-container reaches the top of the viewport
    end: "bottom center+=80px",
    pin: true,
    pinSpacing: false,
    scrub: 1,
  },
});

const stackItems = document.querySelectorAll(".stack-item p");

stacktl = gsap.timeline({
  scrollTrigger: {
    trigger: cont,
    start: "top-=30% top+=15%",
    end: "bottom+=15% bottom",
    scrub: true,
  },
});

stacktl.fromTo(
  stackItems,
  {
    y: "10%",
    opacity: 0,
  },
  {
    opacity: 1,
    y: "0%",
    stagger: 0.2,
  }
);
