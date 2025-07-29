gsap.to('#page2 h1', {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        markers: true,
        scrub: 0.5,
        pin: true,
    },
})