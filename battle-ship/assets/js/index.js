import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

//getting index of cols with letter names
function letterToCol(str) {
  if(str === 'A') return 0;
  else if(str === 'B') return 1;
  else if(str === 'C') return 2;
  else if(str === 'D') return 3;
  else if(str === 'E') return 4;
  else if(str === 'F') return 5;
  else if(str === 'G')return 6;
  else if(str === 'H') return 7;
  else if(str === 'I') return 8;
}

// function colToLetter(n) {
//   if(str === 0) return 'A';
//   else if(str === 1) return 'B';
//   else if(str === 2) return 'C';
//   else if(str === 3) return 'D';
//   else if(str === 4) return 'E';
//   else if(str === 5) return 'F';
//   else if(str === 6)return 'G';
//   else if(str === 7) return 'H';
//   else if(str === 8) return 'I';
// }


//calling elemnts to work on them
const winDiv = document.getElementById('youWin')
const resetDiv = document.getElementById('reset-div')
const table = document.getElementById('battleship__grid');
const table__boards = document.getElementById('table__boards');
const selectPlayers = document.getElementById('select-players-div')

//helper functions
function resetMoves(moves) {
  console.log('reseting')
  for(let i = 0; i < moves.length; i++) {
    let resMove = moves[i];
    resMove.innerText = '';
    resMove.setAttribute('style', 'background-color: white');
  }
}

function gameOver(){
  setTimeout(() => {
    table__boards.setAttribute('class', 'tables-appear')
  }, 1500)
}

window.addEventListener('DOMContentLoaded', event => {
//call the parent div of all our interactions
  table.addEventListener('click', e => {
    const moves = [];
    const move = e.target;
    console.log(move)
    const players = move.dataset.btn_id
    console.log(move.dataset.row)
    console.log(move.dataset.col)

    //player selections
    if(players === 'vsPlayer') {

    }
    else if (players === 'twoPlayer') {

    }
    else {
      selectPlayers.setAttribute('class', 'players-div-remove');
      table__boards.removeAttribute('class', 'tables-appear')
      if(!board.makeHit(Number(move.dataset.row), letterToCol(move.dataset.col))){
      move.setAttribute('style', 'background-color: red');
      moves.push(move);
      } else {
        console.log(selectPlayers)
        move.setAttribute('style', 'background-color: green');
        moves.push(move);
        move.innerText = board.grid[Number(move.dataset.row)][letterToCol(move.dataset.col)]
        if(board.isGameOver()) {
          winDiv.removeAttribute('class', "youWin");
          resetDiv.removeAttribute('class','reset-div')
          gameOver()
        } else {
          console.log(board.isGameOver())
        }
      }
    }

    //functionality to our reset game button
    const resetGame = document.getElementById('reset');
      resetGame.addEventListener('click', e => {
        //endgame
        resetMoves(moves);
        console.log('setting atributes')
        winDiv.setAttribute('class', "youWin");
        resetDiv.setAttribute('class','reset-div')
        console.log('newBorad')

        board = new Board();
      })
  })
})
