var main = document.querySelector('#main');
var cursor = document.querySelector('#cursor');
var imageDiv = document.querySelector('#image');

main.addEventListener('mousemove', function (e) {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.6,
        ease: 'back.out'
    })
});

imageDiv.addEventListener('mouseenter', function (e) {
    cursor.innerHTML = 'Click Me';
    gsap.to(cursor, {
        scale: 5,
        backgroundColor: '#ffffff57',
    })
});

imageDiv.addEventListener('mouseleave', function (e) {
    cursor.innerHTML = '';
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#fff',
    })
});