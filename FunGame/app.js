const playBtn = document.querySelector('.play-btn');
playBtn.addEventListener('click', gameStart);
function gameStart(){
  countStart();
  // countNumberOfCarrots();
  createCarrot();
  const audio = new Audio('sound/bg.mp3');
  audio.play();
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