// Your code here
window.addEventListener('DOMContentLoaded', event => {
  const list = document.getElementById('shopping-list');
  const inpName = document.getElementById('name');
  const catego = document.getElementById('type');
  const unSubmitForm = document.querySelector('form');
  const add = document.getElementById('add')

  add.addEventListener('click', event => {
    try {
      // alert('listening');
      const newItem = document.createElement('li');
      newItem.setAttribute('data-type', `${catego.value}`)
      newItem.innerText = inpName.value;
      list.appendChild(newItem);
      inpName.value = '';


    } catch(error) {
      console.log('Error:', error);
    }
  })
  console.log(unSubmitForm)
})
