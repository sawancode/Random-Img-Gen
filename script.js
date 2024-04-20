
const imgContainer = document.querySelector(".img-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imgNum = 8;
  updateImg();
});

function updateImg() {
  for(let i=0; i<imgNum; i++){
    const newImg = document.createElement("img");

    newImg.src = `https://picsum.photos/300?random=${Math.random()*10}`;
  
    imgContainer.appendChild(newImg);  
  }
}
