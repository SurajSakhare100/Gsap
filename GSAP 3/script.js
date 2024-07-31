var path=`M 0 200 Q 400 200 800 200`;
var finalPath=`M 0 200 Q 400 200 800 200`;

var svgBox=document.getElementById("svgBox");
var string=document.getElementById("stringPath");
svgBox.addEventListener("mousemove",(e)=>{
    path=`M 0 200 Q ${e.x} ${e.y} 800 200 `
    gsap.to("#stringPath",{
        attr:{
            d:path,
        },
        duration:0.3,
        ease:"power3.out"
    }
    )
})
svgBox.addEventListener("mouseleave",(e)=>{
    gsap.to("#stringPath",{
        attr:{
            d:finalPath,
        },
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    }
    )
})