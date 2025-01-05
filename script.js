document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".box", {
        x: 500,
        duration: 2,
        scrollTrigger: {
            trigger: ".box",
            start: "top center",
            end: "bottom center"
        }
    });
   }); 