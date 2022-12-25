const leftArrow = document.querySelector("#slider_arrow-left");
const rightArrow = document.querySelector("#slider_arrow-right");

const imgContainer = document.querySelector(".banner__img-container");
const selector1 = document.querySelector("#selector1");
const selector2 = document.querySelector("#selector2");
const selector3 = document.querySelector("#selector3");
const selector4 = document.querySelector("#selector4");

var sliderIndex = 2;

/*function slideNav(){
    document.getElementById("selector" + sliderIndex).checked = true;
    localStorage.setItem("sliderIndex", JSON.stringify(sliderIndex));
    sliderIndex++;
    if(sliderIndex > 4){
        sliderIndex = 1;
    }
    console.log(sliderIndex)
}*/
function pauseAnimation(){
    imgContainer.style.animationPlayState = "paused";
}
function continueAnimation(){
    imgContainer.style.animationPlayState = "running";
}
/*setInterval(slideNav,4000);*/

leftArrow.addEventListener("click", ()=>{
    imgContainer.style.animation = "none";
    imgContainer.style.marginLeft = "0px";
})
rightArrow.addEventListener("click", ()=>{
    imgContainer.style.animation = "none";
    imgContainer.style.marginLeft = "-1500px";
})
selector1.addEventListener("click",()=>{
    imgContainer.style.marginLeft = "0px";
    imgContainer.style.animation = "none";
    function continueAnimation(){
        imgContainer.style.animation = "translate forwards infinite 12s";
    }
    setTimeout(continueAnimation, 10000);
});
selector2.addEventListener("click",()=>{
    imgContainer.style.marginLeft = "-1500px";
    imgContainer.style.animation = "none";
    function continueAnimation(){
        imgContainer.style.animation = "translate forwards infinite 12s";
    }
    setTimeout(continueAnimation, 10000);
});
selector3.addEventListener("click",()=>{
    imgContainer.style.marginLeft = "-3000px";
    imgContainer.style.animation = "none";
    function continueAnimation(){
        imgContainer.style.animation = "translate forwards infinite 12s";
    }
    setTimeout(continueAnimation, 10000);
});
selector4.addEventListener("click",()=>{
    imgContainer.style.marginLeft = "-4500px";
    imgContainer.style.animation = "none";
    function continueAnimation(){
        imgContainer.style.animation = "translate forwards infinite 12s";
    }
    setTimeout(continueAnimation, 10000);
});

// Descripción de banners al pie de página
const imgBox1 = document.querySelector(".box1");
const imgBox2 = document.querySelector(".box2");
const bannerDescription1 = document.querySelector("#desc1");
const bannerDescription2 = document.querySelector("#desc2");

imgBox1.addEventListener("mouseover", ()=>{
    bannerDescription1.style.visibility = "visible";
})
imgBox1.addEventListener("mouseout", ()=>{
    bannerDescription1.style.visibility = "hidden";
})
imgBox2.addEventListener("mouseover", ()=>{
    bannerDescription2.style.visibility = "visible";
})
imgBox2.addEventListener("mouseout", ()=>{
    bannerDescription2.style.visibility = "hidden";
})