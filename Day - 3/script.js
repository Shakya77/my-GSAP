var initialPath = `M 10 100 Q 500 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
    path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power2.out"
    })
});

string.addEventListener("mouseleave", (dets) => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.3,
        ease: "elastic.out(1, 0.3)"
    })
});

