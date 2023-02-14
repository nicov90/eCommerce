const defaultTheme = document.querySelector("#default");
const darkTheme = document.querySelector("#dark-theme");
var darkThemeStatus = JSON.parse(localStorage.getItem("darkThemeStatus")) || false;

function setTheme(){
    const header = document.querySelector("header");
    const bottomLogo = document.querySelector("#logo-bottom");
    const headerLogo = document.querySelector("#logo-top");
    const headerMenu = document.querySelector(".header__right");
    const searchInput = document.querySelector(".header__search-box__input");
    const themeButtons = document.querySelectorAll(".theme");
    const login = document.querySelector(".header__login-button");
    const text = document.querySelectorAll("p");
    const main = document.querySelector("main");
    const bannerImages = document.querySelectorAll(".banner__img");
    const footer = document.querySelector("footer");
    const formInputs = document.querySelectorAll(".form__input");
    const footerAuthor = document.querySelectorAll(".footer__author");
    const title = document.querySelectorAll(".main-index__title");
    const products = document.querySelectorAll(".main-index__products");

    if(darkThemeStatus){ // Dark Mode
        try{
            if(window.innerWidth <= 820){
                headerLogo.style.backgroundImage = "url(./assets/alura-icon.png)";
            }else{
                headerLogo.style.backgroundImage = "url(./assets/white-AluraGeek_big.png)";
            }
    
            themeButtons.forEach(e =>{
                e.style.borderColor = "transparent";
            });
    
            text.forEach(e =>{
                e.style.color = "rgb(220,220,220)";
            });
    
            bannerImages.forEach(e =>{
                e.style.filter = "brightness(0.9)";
            });
    
            formInputs.forEach(e =>{
                e.style.backgroundColor = "rgba(255,255,255,0.2)";
                e.style.color = "rgb(220,220,220)";
            });
    
            title.forEach(e => {
                e.style.color = "rgb(230,230,230)";
            });
            products.forEach(e =>{
                e.style.color = "white";
                e.style.boxShadow = "0 0 3px white, inset 50px -175px 150px rgb(35, 35, 50)";
            })
            footerAuthor.forEach(e => {
                e.style.background = "rgb(40,40,55)";
            });
    
            header.style.background = "rgb(35,35,55)";
            searchInput.style.backgroundColor = "black";
            searchInput.style.color = "white";
            if(window.innerWidth <= 720){
                headerMenu.style.backgroundColor = "rgb(35,35,55)";
                headerMenu.style.boxShadow = "0 10px 14px rgb(80, 80, 98)";
            }
            menuMobileIcon.style.backgroundImage = "url(./assets/menu_icon-darkmode.svg)";
            login.style.color = "white";
            login.style.backgroundColor = "rgb(51 64 106)";
            login.style.boxShadow = "0 0 2px rgb(44 60 141)";
            main.style.background = "rgb(30,30,50)";
            footer.style.background = "rgb(45,45,65)";
            bottomLogo.style.backgroundImage = "url(./assets/white-AluraGeek_big.png)";
            headerLogo.style.mixBlendMode = "screen";
            bottomLogo.style.mixBlendMode = "screen";
        }catch{
            console.error();
        }
    }
    else { // Default Mode
        try{
            if(window.innerWidth <= 820){
                headerLogo.style.backgroundImage = "url(./assets/alura-icon.png)";
            }else{
                headerLogo.style.backgroundImage = "url(./assets/logo.png)";
            }
    
            themeButtons.forEach(e =>{
                e.style.borderColor = "rgb(87,87,116)";
            });
    
            text.forEach(e =>{
                e.style.color = "rgb(68, 68, 68)";
            });
    
            bannerImages.forEach(e =>{
                e.style.filter = "brightness(1.0)";
            });
    
            formInputs.forEach(e =>{
                e.style.backgroundColor = "white";
                e.style.color = "grey";
            });
    
            title.forEach(e => {
                e.style.color = "rgb(54, 54, 54)";
            });
            products.forEach(e =>{
                e.style.color = "unset";
                e.style.boxShadow = "0px 0px 5px rgb(187 187 187)";
            })
            footerAuthor.forEach(e => {
                e.style.background = "white";
            });
    
            header.style.background = "white";
            searchInput.style.backgroundColor = "rgb(243, 243, 243)";
            searchInput.style.color = "rgb(141, 141, 141)";
            if(window.innerWidth <= 720){
                headerMenu.style.backgroundColor = "white";
                headerMenu.style.boxShadow = "0 10px 16px rgb(218,218,218)";
            }
            menuMobileIcon.style.backgroundImage = "url(./assets/menu_icon.svg)";
            login.style.color = "rgb(78, 78, 78)";
            login.style.backgroundColor = "white";
            login.style.boxShadow = "0px 0px 10px rgb(212 212 212)";
            main.style.background = "rgb(248,248,248)";
            footer.style.background = "rgb(234 242 253)";
            bottomLogo.style.backgroundImage = "url(./assets/logo.png)";
            headerLogo.style.mixBlendMode = "normal";
            bottomLogo.style.mixBlendMode = "normal";
        }catch{
            console.error();
        }
    }
};

defaultTheme.addEventListener("click",()=>{
    localStorage.setItem("darkThemeStatus", JSON.stringify(false));
    darkThemeStatus = false;
    setTheme();
});
darkTheme.addEventListener("click",()=>{
    localStorage.setItem("darkThemeStatus", JSON.stringify(true));
    darkThemeStatus = true;
    setTheme();
});
setTheme();