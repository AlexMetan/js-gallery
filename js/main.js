const photos=document.querySelectorAll('.photo')

// popup elements
let photoWindow=document.querySelector('.gallery-photo-full')
const fullPhoto=document.querySelector(".gallery-photo-full img")

// gallery buttons
const btnClose=document.querySelector('.btn-close')
const btnNext=document.querySelector('.btn-next')
const btnPrev=document.querySelector('.btn-prev')

let currentPhotoId

// open popup on photo click
photos.forEach((el,index)=>{
    el.setAttribute('gallery-el',index)
    el.onclick=(()=>{
        const url=el.getAttribute('src')
        currentPhotoId=el.getAttribute('gallery-el')
        showPhoto(url)
    })
})
// open popup
function showPhoto(url){
    fullPhoto.setAttribute('src',url)
    photoWindow.classList.add('show-gallery')
}

btnClose.onclick=hidePhoto
btnNext.onclick=nextPhoto
btnPrev.onclick=prevPhoto

// hide popup
function hidePhoto(){
    photoWindow.classList.remove('show-gallery')
}

function nextPhoto(){
    if(currentPhotoId>=photos.length-1){
        currentPhotoId=0
    } else{
        currentPhotoId++
    }
    updatePhoto()
}   
function prevPhoto(){
    if(currentPhotoId<=0){
        currentPhotoId=photos.length-1
    } else{
        currentPhotoId--
    }
    updatePhoto()
}

//  update popup photo by src
function updatePhoto(){
    const url=photos[currentPhotoId].getAttribute('src')
    fullPhoto.setAttribute('src',url)
}

document.addEventListener('keydown', function (event) {
    //  right arrow click
    if(event.keyCode==37)prevPhoto()
    //  left arrow click
    if(event.keyCode==39)nextPhoto()
})
