const blackBackground = document.getElementById("black-background");
// const arrow = document.querySelector(".fa-arrow-down");
const textContainer = document.getElementById("text-container");
const moon=document.getElementById('moon');
const moonImage = document.getElementById("moonImage");
const eclipse = document.getElementById("eclipse");

const firstParagraph="Info text 1";
const secondParagraph="Here we can see the start of the sun eclipse";
const thirdParagraph="Here we can see how the moon looks like in total sun eclipse.";

const moonShadowStart=600;
const sunStart=1200;
// arrow.addEventListener("click", () => {
//   window.scrollTo(window.scrollX, window.scrollY + 400);
//   console.log("hello");
// });
window.addEventListener("scroll", () => {
  if (window.scrollY >= moonShadowStart && window.scrollY < sunStart) {
    blackBackground.style.top = "20%";
    textContainer.classList.remove("hidden");
    textContainer.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 500,
      iterations: 1,
    });
    textContainer.style.opacity = "1";
    eclipse.style.opacity = 0;
    moon.style.opacity=1;
    moonImage.style.opacity = 1;
    eclipse.style.backgroundColor = "orange";
    textContainer.innerText = secondParagraph;


    // blackBackground.children[0].classList.remove("hidden");
    console.log(window.scrollY);
  } else if (window.scrollY > sunStart && window.scrollY < 1500) {
    blackBackground.style.top = "-10%";
    textContainer.classList.remove("hidden");
    textContainer.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 500,
      iterations: 1,
    });
    
    textContainer.innerText = thirdParagraph;
    textContainer.style.opacity = "1";
    moonImage.style.opacity = 0;
    eclipse.style.opacity = 1;
    eclipse.style.backgroundColor = "black";

    // blackBackground.style.opacity = "0";
  } else if ( window.scrollY > 1500) {
    blackBackground.style.top = "-10%";
    textContainer.classList.remove("hidden");
    textContainer.animate([{ opacity: "1" }, { opacity: "0" }], {
      duration: 500,
      iterations: 1,
    });
    
    textContainer.innerText = thirdParagraph;
    textContainer.style.opacity = "0";
    eclipse.style.opacity=0;
    moonImage.style.opacity = 0;
    eclipse.style.backgroundColor = "black";
    blackBackground.style.opacity=0;

    // blackBackground.style.opacity = "0";
  } 
  else if (window.scrollY < moonShadowStart) {
    blackBackground.style.top = "100%";
    // blackBackground.children[0].classList.add("hidden");
    // blackBackground.children[1].classList.add("hidden");
    textContainer.classList.add("hidden");
    textContainer.animate([{ opacity: "1" }, { opacity: "0" }], {
      duration: 500,
      iterations: 1,
    });
    moonImage.style.opacity = 1;
    textContainer.style.opacity = "0";
    textContainer.innerText = firstParagraph;
    eclipse.style.opacity = 0;
    eclipse.style.backgroundColor = "orange";
    moon.style.opacity=0;
  }
});
