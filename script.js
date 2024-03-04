const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();
gsap.set("#nav, #page2, #page3, #page4, #page5, #page6, #page7, #page8, #page9, #page10", { opacity: 0});

tl.to("#page1", {
    y: "100vh",
    scale: 0.5,
    duration: 0
})
tl.to("#page1", {
    y: "-10vh",
    duration: 1,
    delay: 0.5
})
tl.to("#page1", {
    y: "0vh",
    rotate: -720,
    scale: 1,
    duration: 1.5,
    ease: "power1.in",
    delay: 0.6,
    onComplete: function() {
        gsap.to("#nav, #page2, #page3, #page4, #page5, #page6, #page7, #page8, #page9, #page10", { opacity: 1, duration: 0.5 });
    }
})

let prevScrollPos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("nav").classList.remove("hidden");
  }
  else {
    document.getElementById("nav").classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
};