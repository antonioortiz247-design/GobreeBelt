
document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"})

})
})
const images = document.querySelectorAll(".gallery-img")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightbox-img")
const close = document.querySelector(".close")

images.forEach(img => {

img.addEventListener("click", ()=>{

lightbox.style.display = "flex"
lightboxImg.src = img.src

})

})

close.addEventListener("click", ()=>{

lightbox.style.display = "none"

})
