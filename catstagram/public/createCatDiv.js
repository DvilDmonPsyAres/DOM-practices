import {setImage} from './setImage.js';
import { createVotesDiv } from './votesDiv.js';
import {createComments} from './comments.js'

export const createCatDiv = (catData) => {

  const main = document.getElementById('main-section')
  //remove all childs
  try{
      if(main.children[0]) {
        console.log('childrens')
        main.removeChild(main.children[0])
        return createCatDiv(catData)
    }
  }
  catch(error) {
    console.error('no childs to dismiss', error)
  }
  //create a new Div for cat functionality
  const newDiv = document.createElement('div')
  newDiv.setAttribute('id', 'main')
  //set Image
  main.appendChild(newDiv)
  if(localStorage.catData) {
    setImage(localStorage.catData)
    console.log('local data image')
  } else {
    setImage(catData)
    console.log('new image data')
    localStorage.setItem('catData', catData)
  }

  //set votes section
  createVotesDiv()
// set Comments input
  createComments()
  //set div to element

}
