const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const tl = gsap.timeline({ paused: true, ease: "power1.inOut" });

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.close-menu');

tl.to(navMenu, {
  clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
  duration: 0.5, // Adjust the duration as needed
});

hamburger.addEventListener('click', () => {
  tl.play();
});

closeMenu.addEventListener('click', () => {
  tl.reverse();
});
