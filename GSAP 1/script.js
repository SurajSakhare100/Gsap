// gsap.from('h1',{
//     y:30,
//     opacity:0,
//     duration:2,
//     delay:1,
//     // stagger:0.1
// })

// gsap.to('#box',{
//     x:800,
//     duration:2,
//     delay:1,
//     repeat:2,
//     yoyo:true
// })

var tl=gsap.timeline();
// tl.to('#box1',{
//     x:800,
//     duration:2,
//     delay:1,
// })
// tl.to('#box2',{
//     x:800,
//     duration:2,
//     delay:1,
// })
// tl.to('#box3',{
//     x:800,
//     duration:2,
//     delay:1,
// })

tl.from("nav h2",{
    opacity:0,
    y:-20,
    duration:1,
    delay:1
})
tl.from("nav ul li",{
    opacity:0,
    y:-20,
    duration:1,
    stagger:0.2
})
tl.from("#center",{
    opacity:0,
    y:-20,
    duration:1,
    scale:0.2
})