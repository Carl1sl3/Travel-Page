const btnMenu = document.querySelector(".nav_responsive-button-container");
const divMenu = document.getElementById("nav_li-responsive-container");
const divMenuStyle=window.getComputedStyle(divMenu);
btnMenu.addEventListener("click",(e)=>{
    e.preventDefault();
    if (divMenuStyle.getPropertyValue("display")=="none"){
        divMenu.style.display="flex";
    }
    else{
        divMenu.style.display="none";
    }
});
window.addEventListener('resize',(event)=>{
    if (screen.width>=740){
        divMenu.style.display="none";
    }
});
