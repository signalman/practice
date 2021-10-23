const lineX=document.querySelector('.x');
const lineY=document.querySelector('.y');
const tag=document.querySelector('.tag');
const img=document.querySelector('.img');

document.addEventListener('mousemove', (event)=>{
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x} ${y}`);
  lineX.style.top = `${y}px`;
  lineY.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.left= `${x}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerText = `x: ${x} y: ${y}`
});
