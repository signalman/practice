const playBtn = document.querySelector('.play-btn');
const bg = new Audio('sound/bg.mp3');
const i = document.querySelector('i');


playBtn.addEventListener('click', gameStart);
let click = 0;
function gameStart(){
  if(click%2===1){
    bg.pause();
    i.classList.remove('fa-stop');
    i.classList.add('fa-play');
  }
  else{
    countStart();
    // countNumberOfCarrots();
    createCarrot();
    bg.play();
    i.classList.remove('fa-play');
    i.classList.add('fa-stop');

  }
  click++;
}
function countStart(){

}
function createCarrot(){
  for(let i=0; i<10; i++){
  const i = 0;
  let top = Math.random();
  top=top*190;
  let left = Math.random();
  left=left*700;
  const img = document.createElement('img');
  img.src= "img/carrot.png";
  document.body.querySelector('.box2').appendChild(img);
  img.style.position='absolute';
  img.style.top=top+'px';
  img.style.left=left+'px';
  }
}