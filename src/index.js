const blackBackground = document.getElementById("black-background");
const arrow = document.querySelector(".fa-arrow-down");
const textContainer = document.getElementById("text-container");
const moonImage = document.getElementById("moonImage");
const eclipse = document.getElementById("eclipse");

arrow.addEventListener("click", () => {
  window.scrollTo(window.scrollX, window.scrollY + 400);
  console.log("hello");
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200 && window.scrollY < 600) {
    blackBackground.style.top = "20%";
    textContainer.classList.remove("hidden");
    textContainer.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 500,
      iterations: 1,
    });
    textContainer.style.opacity = "1";
    eclipse.style.opacity = 0;
    moonImage.style.opacity = 1;

    // blackBackground.children[0].classList.remove("hidden");
    console.log(window.scrollY);
  } else if (window.scrollY > 600 && window.scrollY < 3000) {
    blackBackground.style.top = "-10%";
    textContainer.classList.remove("hidden");
    textContainer.animate([{ opacity: "0" }, { opacity: "1" }], {
      duration: 500,
      iterations: 1,
    });
    textContainer.innerText = "Info text 2";
    textContainer.style.opacity = "1";
    moonImage.style.opacity = 0;
    eclipse.style.opacity = 1;
    eclipse.style.backgroundColor = "black";

    // blackBackground.style.opacity = "0";
  } else if (window.scrollY < 200) {
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
    textContainer.innerText = "Info text 1";
    eclipse.style.opacity = 1;
  }
});
