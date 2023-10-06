const solarEclipse = document.querySelector(".eclipse:nth-child(1)");
const lunarEclipse = document.querySelector(".eclipse:nth-child(2)");
const eclipseContainers = document.querySelectorAll(".eclipse-container");

const moonObject = document.getElementById("moon-solar-lunar");
const button = document.getElementById("change-solar-to-lunar-btn");

const lunarText = document.getElementById("text-lunar");
const solarText = document.getElementById("text-solar");

let isSolar; // solar = 0 , lunar = 1
let canClick = true;
function change_eclipse(e) {
  console.log("hello from space");
  if (canClick) {
    canClick = false;
    isSolar = !isSolar;
    if (!isSolar) {
      moonObject.classList.add("spin-to-solar");
      moonObject.classList.remove("spin-to-lunar");
      button.innerText = "Try Lunar Eclipse";
      lunarText.classList.add("text-hidden");
      solarText.classList.remove("text-hidden");
    } else {
      moonObject.classList.add("spin-to-lunar");
      moonObject.classList.remove("spin-to-solar");
      button.innerText = "Try Solar Eclipse";

      solarText.classList.add("text-hidden");
      lunarText.classList.remove("text-hidden");
    }
    setTimeout(() => {
      canClick = true;
    }, 5000);
  }
}

button.addEventListener("click", change_eclipse);
