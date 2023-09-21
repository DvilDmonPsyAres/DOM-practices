let commentId = 0;
import { lastState } from './state.js'
//comments Listener

function commentsButtonListener(){

  if(lastState().length !== 0) {
    console.log(lastState())
    const textM = lastState()
    for(const keys in textM){
      const texts = textM[keys]
      commentsDiv(texts);
      localStorage.removeItem('keys')
    }
  }

  const text = document.getElementById('comment');
  const submitComment = document.getElementById('comment-btn');
  submitComment.addEventListener('click', e => {
    console.log('testing comments button');
    commentsDiv(text.value)
    text.value = ''
  })
}

//create comment div
function commentsDiv(text){

  const main = document.getElementById('main')
  const commentDiv = document.createElement('div');
  const newP = document.createElement('p')
  commentDiv.setAttribute('data-comid', `${commentId}`)
  localStorage.setItem(`data-comid${commentId}`, text)

  newP.innerText = text;
  commentDiv.appendChild(newP);

  //delete comment btn
  const newButton  = document.createElement('button');
  newButton.innerText = 'delete comment'
  newButton.setAttribute('id', 'delete-btn');
  newButton.setAttribute('data-id', `${commentId}`)
  commentDiv.appendChild(newButton)

  main.appendChild(commentDiv);
  setTimeout(() => {
    deleteCommentButton()
  }, 1000)

  commentId++;
  console.log('current commentId after creating div', commentId)

}

//delete comment listener
function deleteCommentButton() {
  const main = document.getElementById('main')
  const currBtn = document.querySelectorAll('#delete-btn');
  //set event listener to each btn
  currBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      //select element to remove by data attribute
      const commentIdToDelete = btn.getAttribute('data-id');
      const commentToRemove = main.querySelector(`[data-comid="${commentIdToDelete}"]`);
      localStorage.removeItem(`data-comid${commentIdToDelete}`)
      console.log(localStorage)

      if (commentToRemove) {
        commentToRemove.remove();
        // lastState()
        console.log('Deleted comment with id:', commentIdToDelete);
      }
      e.stopPropagation();
    })
  })

}

export const createComments = () => {
  //new div
  const main = document.getElementById('main')
  const newDiv = document.createElement('div')
  newDiv.setAttribute('id', 'commentsDiv')
  //adding text inputs and Label
  const newTextInput = document.createElement('input');
  newTextInput.setAttribute('id', 'comment');
  const newLabel = document.createElement('label')
  newLabel.setAttribute('for', 'comment')
  newLabel.innerText = "Comment :"
  // comment submit button
  const newButton  = document.createElement('button');
  newButton.innerText = 'comment!'
  newButton.setAttribute('id', 'comment-btn');

  newDiv.appendChild(newLabel)
  newDiv.appendChild(newTextInput);
  newDiv.appendChild(newButton);
  main.appendChild(newDiv);

  setTimeout(() => {
    commentsButtonListener();
  }, 1000)
}
