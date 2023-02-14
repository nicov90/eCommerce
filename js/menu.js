const menuMobileIcon = document.querySelector(".header__menu-icon");
const headerMenu = document.querySelector(".header__right");
const menuOpened = false;
localStorage.setItem("MenuOpened", JSON.stringify(false));

menuMobileIcon.addEventListener("click", e =>{
    if(!JSON.parse(localStorage.getItem("MenuOpened"))){
        localStorage.setItem("MenuOpened", JSON.stringify(true));
        headerMenu.style.visibility = "visible";
        headerMenu.style.opacity = "1.0";
    }else{
        localStorage.setItem("MenuOpened", JSON.stringify(false));
        headerMenu.style.visibility = "hidden";
        headerMenu.style.opacity = "0";
    }
})