
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

const track = document.querySelector(".carousel-track")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")

let position = 0

next.addEventListener("click",()=>{

position -= 300

if(position < -900){
position = 0
}

track.style.transform = `translateX(${position}px)`

})

prev.addEventListener("click",()=>{

position += 300

if(position > 0){
position = -900
}

track.style.transform = `translateX(${position}px)`

})
