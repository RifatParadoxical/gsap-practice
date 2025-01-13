const tl = gsap.timeline();
// //page1 animation

var clutter = ""
let h1 = document.querySelector('h1').innerText.split("").forEach((elem)=>{
   clutter += `<span>${elem}</span>`
})
document.querySelector('h1').innerHTML = clutter;

gsap.from("h1 span",{
    // y: 100,
    opacity: 0,
    duration: 2,
    delay: 1,
    stagger: 0.1,

})


// tl.to('.page1 .box1', {
//     x: 200,
//     duration: 2,
//     delay: 1,
//     scrollTrigger: {
//         trigger:'.page1 .box1',
//         scroller: 'body',
//         scrub: true, // true and value both are legal but value 2 is the most recomended.
//         pin: true // left right scroll effect gula banaite kaje lage.
//     }
// })
// tl.from('.page1 .box2', {
//     x: 200,
//     duration: 1,
//     delay: 2,
//     repeat: -1,
//     yoyo: true

// })
// tl.from('.page1 .box3',{
//     y:200,
//     duration: 1,
//     delay: 1,
//     stagger:-1,
// })
//page2 animation
tl.to('.page2 .box1', {
    x: 200,
    duration: 2,
    delay: 1,

})
tl.from('.page2 .box2', {
    x: 200,
    duration: 1,
    delay: 2,
    repeat: -1,
    yoyo: true

})
tl.from('.page2 .box3',{
    y:200,
    duration: 1,
    delay: 1,
    stagger:-1,
})
//page3 animation


window.addEventListener('wheel',(elem)=>{
    if (elem.deltaY > 0) {
        gsap.to('.marquee', {
            transform:"translateX(-100%)",
            duration:3,
            repeat:-1,
            ease: "none",
        })
        gsap.to('.marquee img', {
            rotate: 0
        })
    } else {
        gsap.to('.marquee', {
            transform:"translateX(100%)",
            duration:3,
            repeat:-1,
            ease: "none",
        })
        gsap.to('.marquee img', {
            rotate: 180
        })
    }
})
gsap.to('.marquee', {
    transform:"translateX(-100%)",
    duration:3,
    repeat:-1,
    ease: "none",
})

// tl.to('.page3 .box1', {
//     x: 200,
//     duration: 2,
//     delay: 1,

// })
// tl.from('.page3 .box2', {
//     x: 200,
//     duration: 1,
//     delay: 2,
//     repeat: -1,
//     yoyo: true

// })
// tl.from('.page3 .box3',{
//     y:200,
//     duration: 1,
//     delay: 1,
//     stagger:-1,
// })