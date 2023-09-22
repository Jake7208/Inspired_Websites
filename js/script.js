gsap.registerPlugin(ScrollTrigger);
const expertise = document.querySelectorAll("#section-cont");
const scrollMask = document.querySelectorAll(".section-title");
const expertise2 = document.querySelectorAll("#section-contB");
const scrollMask2 = document.querySelectorAll(".section-titleB");

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
const tl23 = gsap.timeline();

tl23.fromTo(
  scrollMask2,
  {
    y: "-100%",
  },
  {
    y: "0%",
  }
);

ScrollTrigger.create({
  animation: tl23,
  trigger: expertise2,
  start: "top-=100% top",
  end: "top center",
  // markers: true,
  scrub: 1,
});

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
const stats = document.querySelector("#stats");
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
    start: "top-=500 top+=15%",
    end: "bottom+=15% bottom",
    // markers: true,
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
    stagger: 0.8,
    ease: Power2.easeInOut,
  }
);

gsap.fromTo(
  body,
  {
    backgroundColor: "var(--background-color)",
    color: "var(--text-color)",
  },
  {
    backgroundColor: "var(--background-trans-color)",
    color: "var(--background-color)",
    duration: 1,
    scrollTrigger: {
      trigger: expertise2,
      start: "top-=15% top+=15%",
      end: "bottom+=15% bottom",
      // markers: true,
      scrub: true,
    },
  }
);

const testimonial = document.querySelector(".testimonial-container");

if (window.innerWidth > 800) {
  gsap.to(".stats-container", {
    scrollTrigger: {
      trigger: "#stats",
      start: "top-=80 top",
      end: "bottom top",
      // markers: true,
      pin: true,
      pinSpacing: false,
    },
  });
} else {
  gsap.to(".stats-container", {
    scrollTrigger: {
      trigger: ".stats:last-child",
      start: "top-=80 top",
      end: "bottom top",
      // markers: true,
      pin: true,
      pinSpacing: false,
    },
  });
}

gsap.fromTo(
  body,
  {},
  {
    backgroundColor: "var(--background-color)",
    color: "var(--text-color)",
    scrollTrigger: {
      trigger: "#testimonials",
      start: "top-=80 top",
      end: "top top",
      scrub: true,
      // markers: true,
      pinSpacing: false,
    },
  }
);


