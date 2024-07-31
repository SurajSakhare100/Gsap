var main = document.getElementById("main");
var image = document.getElementById("image");
var circle = document.getElementById("circle");

main.addEventListener("mousemove", function (e) {
  gsap.to(circle, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.7,
  });
});

image.addEventListener("mouseenter", function () {
  circle.innerText = "View More";
  gsap.to(circle, {
    scale:4,
    duration: 0.1,
    backgroundColor:"#ffffffd7"

  });
});

image.addEventListener("mouseleave", function () {
  circle.innerHTML = "";
  gsap.to(circle, {
    scale:1,
    duration: 0.1,
    backgroundColor:"#fff"
  });
});
