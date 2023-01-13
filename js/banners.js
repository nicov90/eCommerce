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