const container = document.querySelector('.container')
const URL = "https://img.freepik.com/free-vector/hello-wording-comic-speech-bubble-pop-art-style_1150-"

function loadImages(numImages=50){
  console.log("end of scroll")
  let i=0;
  while(i<numImages){
    img = document.createElement('img') 
    imgURL = URL + Math.floor(Math.random()*1000) +".jpg?w=200"
    img.src = imgURL
    container.appendChild(img)
    i = i+1;
  }
 
 }

 loadImages();

 window.addEventListener('scroll',()=>{
  if(window.innerHeight+window.scrollY + 1 >= document.documentElement.scrollHeight)
  loadImages(20);
 }
 )