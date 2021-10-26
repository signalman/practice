const app = document.querySelector('.app');
const appTitle = document.querySelector('.app-title');
const list = document.querySelector('.list');
const listInput = document.querySelector('.list-input');
const footer = document.querySelector('.footer');
const add = document.querySelector('.add');
const listDelete = document.querySelector('.list-delete');


listInput.addEventListener('keydown', (event)=>{
  if(event.keyCode== 13){
  createList();
  }
  listInput.focus();
})

add.addEventListener("click", ()=>{
  createList();
  listInput.focus();
})

function createList(){
  const inputValue = listInput.value;
  listInput.value = "";
  const li = document.createElement('li');
  list.append(li);
  const span = document.createElement('span');
  li.append(span);
  span.innerHTML = inputValue;
  
  const btn = document.createElement('button');
  btn.setAttribute('class','list-delete');
  li.append(btn);
  btn.setAttribute('id', `${Math.floor(Math.random()*1000)}`);
  btn.innerText = `🗑`;
  btn.addEventListener("click", ()=>{
    list.removeChild(li);
  })
}