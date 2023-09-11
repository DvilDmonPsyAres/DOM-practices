console.log('enabling connection ...')
let redInput;
let listAdd;
let addItem;
let section3;
let colorId;
let remItems;
// Define callback functions outside of the addEventListener functions
function handleRedInputChange(event) {
  let text = redInput.value;
  console.log(text);
  if (text === 'red') {
    redInput.style.backgroundColor = 'red';
  } else {
    redInput.style.backgroundColor = 'white';
  }
}

function handleAddItemClick(event) {
  try {
    const newLi = document.createElement('li');
    newLi.innerText = listAdd.value;
    const u = document.querySelector('ul');
    u.appendChild(newLi);
    listAdd.value = '';
    console.log('clicked');
  } catch (error) {
    console.error('Error:', error);
  }
}

function handleColorInputChange(event) {
  console.log(colorId.value);
  section3.style.backgroundColor = `${colorId.value}`;
}

let toogle = 'x';
function handleRemoveListenersClick(event) {
  // Remove event listeners

  if(toogle === 'x'){
    redInput.removeEventListener('input', handleRedInputChange);
    addItem.removeEventListener('click', handleAddItemClick);
    colorId.removeEventListener('input', handleColorInputChange);
    toogle = 'o'
    remItems.innerText = 'Add Listeners'
  } else {
    redInput.addEventListener('input', handleRedInputChange);
    addItem.addEventListener('click', handleAddItemClick);
    colorId.addEventListener('input', handleColorInputChange);
    toogle = 'x'
    remItems.innerText = 'Remove Listeners'
  }



  console.log('Listeners removed');
}

window.addEventListener('DOMContentLoaded', event => {
  alert('DOM has Loaded.');

  redInput = document.getElementById('red-input');
  listAdd = document.getElementById('list-add');
  addItem = document.getElementById('add-item');
  section3 = document.getElementById('section-3');
  colorId = document.getElementById('color-select');
  remItems = document.getElementById('remove-listeners');

  // Add event listeners
  redInput.addEventListener('input', handleRedInputChange);
  addItem.addEventListener('click', handleAddItemClick);
  colorId.addEventListener('input', handleColorInputChange);
  remItems.addEventListener('click', handleRemoveListenersClick);
});
