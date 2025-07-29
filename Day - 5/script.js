var menu = document.querySelector(".openIcon");
var close = document.querySelector(".closeIcon");

var tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.4
})

tl.from("#full h4", {
    x: 150,
    duration: 0.1,
    stagger: 0.2,
    opacity: 0,
})

tl.from(".closeIcon", {
    opacity: 0,
})

tl.pause();

menu.addEventListener("click", function (e) {
    tl.play();
})

close.addEventListener("click", function (e) {
    tl.reverse();
})

