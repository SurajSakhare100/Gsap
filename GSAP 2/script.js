// gsap.registerPlugin(ScrollTrigger);
// gsap.from("#page2 h1",{
//     x:500,
//     duration:2,
//     opacity:0,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         markers:true,
//         scroller:"body",
//         start: "top 60%", 
//         end:"bottom 40%",
//         scrub:true,

//         // toggleActions: "play none none reverse" 
//     }
// })

// gsap.from("#page2 h2",{
//     x:-500,
//     duration:2,
//     opacity:0,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         markers:true,
//         scroller:"body",
//         start: "top 60%", 
//         end:"bottom 40%",
//         scrub:true,
//         // toggleActions: "play none none reverse" 
//     }
// })



gsap.to("#page3 h1",{
    transform: "translateX(-80%)",
    duration:2,
    scrollTrigger: {
        trigger: "#page3",
        markers:true,
        scroller:"body",
        start: "top 0%",
        end:"top -100%", 
        scrub:2,
        pin:true
    }
})