const breaktext = () => {
    var h1 = document.querySelector("h1");
    var h1Text = document.querySelector("h1").textContent;

    var splittedText = h1Text.split("");

    var clutter = "";

    var halfValue = Math.floor(splittedText.length / 2);

    splittedText.forEach(function (letter, index) {
        if (index < halfValue) {
            clutter += `<span class="b">${letter}</span>`;
        } else {
            clutter += `<span class="c">${letter}</span>`;
        }
    })

    h1.innerHTML = clutter;
}

breaktext();

gsap.from("h1 .b", {
    y: 50,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1,
});


gsap.from("h1 .c", {
    y: -50,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: -0.1,
});