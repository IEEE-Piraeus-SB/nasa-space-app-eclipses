const blackBackground = document.getElementById("black-background");
const arrow = document.querySelector(".fa-arrow-down");

arrow.addEventListener("click", () => {
  window.scrollTo(window.scrollX, window.scrollY + 200);
  console.log("hello");
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200 && window.scrollY < 400) {
    blackBackground.style.top = "50%";
    blackBackground.children[0].classList.remove("hidden");
    console.log(window.scrollY);
  } else if (window.scrollY >= 400 && window.scrollY < 600) {
    blackBackground.style.top = "0%";
    blackBackground.children[0].classList.add("hidden");
    blackBackground.children[1].classList.remove("hidden");
  } else if (window.scrollY < 200) {
    blackBackground.style.top = "100%";
    blackBackground.children[0].classList.add("hidden");
    blackBackground.children[1].classList.add("hidden");
  }
});
