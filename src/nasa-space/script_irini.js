const solarEclipse = document.querySelector('.eclipse:nth-child(1)');
const lunarEclipse = document.querySelector('.eclipse:nth-child(2)');
const eclipseContainers = document.querySelectorAll('.eclipse-container');

const moon = document.getElementById("moon-solar-lunar")
const button= document.getElementById("change-solar-to-lunar-btn")

const lunarText = document.getElementById("text-lunar")
const solarText = document.getElementById("text-solar")

let isSolar // solar = 0 , lunar = 1
let canClick = true
function change_eclipse(e){
    console.log("hello from space")
    if(canClick){
        canClick = false
        isSolar = !isSolar
    if(!isSolar){

        moon.classList.add("spin-to-solar")
        moon.classList.remove("spin-to-lunar")
        button.innerText = "Try Lunar Eclipse";
        lunarText.classList.add("text-hidden")
        solarText.classList.remove("text-hidden")
        
    }
    else{
        moon.classList.add("spin-to-lunar")
        moon.classList.remove("spin-to-solar")
        button.innerText = "Try Solar Eclipse";

        
        solarText.classList.add("text-hidden")
        lunarText.classList.remove("text-hidden")

    }
    setTimeout(() => {
        canClick = true
    }, 5000);
    }
}

button.addEventListener("click",change_eclipse)