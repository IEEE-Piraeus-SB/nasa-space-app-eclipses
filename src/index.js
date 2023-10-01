const blackBackground = document.getElementById("black-background");
// const arrow = document.querySelector(".fa-arrow-down");
const textContainer = document.getElementById("text-container");
const moonImage = document.getElementById("moonImage");
const eclipse = document.getElementById("eclipse");

const firstParagraph="Info text 1";
const secondParagraph="Info text 2";
const thirdParagraph="Info text 3";

const moonShadowStart=200;
const sunStart=600;
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
    moonImage.style.opacity = 1;
    eclipse.style.backgroundColor = "orange";
    textContainer.innerText = secondParagraph;


    // blackBackground.children[0].classList.remove("hidden");
    console.log(window.scrollY);
  } else if (window.scrollY > sunStart && window.scrollY < 3000) {
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
  } else if (window.scrollY < moonShadowStart) {
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
  }
});
