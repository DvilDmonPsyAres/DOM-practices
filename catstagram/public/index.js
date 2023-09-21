import { createCatDiv } from './createCatDiv.js'
import { lastState } from './state.js';

let commentId;

// main section
const loadMain = () => {
  document.body.style = 'text-align:center;'
  const title = document.createElement('h1');
  title.innerText = 'Catstagram'
  const btn = document.createElement('button');
  btn.innerText = 'New Kitten'
  btn.setAttribute('id', 'get-cat');
  document.body.appendChild(title);
  document.body.appendChild(btn);


  const main = document.createElement('main');
  main.setAttribute('id', 'main-section');
  document.body.appendChild(main)
}
//button create cat listener
function buttonListener(){
  const getCat = document.getElementById('get-cat');
  getCat.addEventListener('click', e => {
    try {
      localStorage.clear()
      callContent()
    }catch(error){
      console.error('Error calling Content:', error)
    }
  })
}

const callContent = () => {

  fetch("https://api.thecatapi.com/v1/images/search")
        .then(res => res.json())
        .then(resBody => {
        console.log('res Body: ', resBody)
        createCatDiv(resBody[0].url)
        })
        .catch(error => {
          console.error('Error:', error);
        })


}

window.onload = () => {
  console.log('loaded')
  console.log(localStorage.catData);
  loadMain()
  callContent()
  buttonListener();

//localSorage
}
