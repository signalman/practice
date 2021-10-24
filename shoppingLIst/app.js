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
})

add.addEventListener("click", ()=>{
  createList();
})

function createList(){
  const inputValue = listInput.value;
  listInput.value = "";
  const li = document.createElement('li');
  list.append(li);
  li.innerHTML = inputValue;
  
  const btn = document.createElement('button');
  btn.setAttribute('class','list-delete');
  li.append(btn);
  btn.setAttribute('id', `${Math.floor(Math.random()*1000)}`);
  btn.innerText = `🗑`;
}
