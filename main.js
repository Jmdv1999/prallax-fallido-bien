const piramides = document.querySelector(".piramides");
const palacio = document.querySelector(".palacio");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const info = document.querySelector(".info");

window.addEventListener("load",()=>{
    piramides.style.transform = "translateX(0)";
    palacio.style.transform = "translateX(0)";
    logo.style.transform = "translateY(0)";
    nav.style.transform = "translateY(0)";
    setTimeout(()=>{
        info.style.transform = "translateY(0)";
        info.style.opacity = "1";
    },800);
});
window.addEventListener("scroll", () => {
    const scrollVal = window.scrollY;
    piramides.style.left = scrollVal * -0.25 + "px";
    palacio.style.left = scrollVal * 0.25 + "px";
    info.style.marginTop = scrollVal * 1.1 + "px";
    
    piramides.style.transition = "0s";
    palacio.style.palacio = "0s";
    info.style.palacio = "0s";
});
window.onscroll = function () {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        info.style.opacity = "0";
        info.style.transition = "0.6s";
    }
    else{
        info.style.opacity = "1";
        info.style.transition = "0.6s";
    }
}