// Your code here
// window.onload = () => {
//   const winP = document.createElement('p');
//   winP.innerText = `Winner: ${'the winner'}`
//   const winDiv = document.getElementById("winner__sec")
//   console.log(winP)
//   console.log(winDiv)
//   winDiv.appendChild(winP);
// }
let table = [['','',''],
               ['','',''],
               ['','',''],];

function gameEnd(T) {
  for(let i = 0; i < T.length; i++) {
    if((T[i][0] === T[i][1] && T[i][1] === T[i][2]) && T[i][0] !== ''){
      return T[i][0];
      }
  }
  for(let j = 0; j < T.length; j++) {
    if((T[0][j] === T[1][j] && T[1][j] === T[2][j])&& T[0][j] !== ''){
      return T[0][j];
      }
  }
  if((T[0][0] === T[1][1] && T[1][1] === T[2][2])&& T[0][0] !== ''){
    return T[0][0];
  }
  if((T[0][2] === T[1][1] && T[1][1] === T[2][0])&& T[0][2] !== ''){
    return T[0][2];
  }
}

function isTie(T) {
  for(let i = 0; i < T.length; i++) {
    for(let j = 0; j < T.length; j++) {
      if(T[i][j] === '') {
        return false;
      };
    }
  }
  return 'IS TIE';
}

function createWinDiv(p, result, winDiv) {
  const winP = document.createElement('p');
  winP.innerText = `${p} ${result}`

  console.log(winP)
  console.log(winDiv)
  winDiv.appendChild(winP);
}

let currElement;
let moves = new Set(['undefinedundefined'])

function newGame(grid, winDiv){
  // console.log('testing grid:', grid);
    for(let i = 0; i < grid.children.length; i++){
      const rows = grid.children[i]
      // console.log(`rows:${i}`, rows.children[0]);
      for(let j = 0; j < rows.children.length; j++) {
        const squares = rows.children[j];
        // console.log(`testing squares: row:${i} col ${j}: `, squares);
        if(squares.children[0]) {
          // console.log('img to remove: ', squares.children[0])
          // console.log('testing removal');
          const hit = squares.children[0];
          squares.removeChild(hit);
        }
      }
    }
    moves = new Set(['undefinedundefined'])
    table = [['','',''],
               ['','',''],
               ['','',''],];
    winDiv.removeChild(winDiv.children[0]);
  }

  function getValidMoves(grid) {
    console.log('grid', grid)
    let validMoves = []
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(grid[i][j] === "") {
          validMoves.push({row: i, col: j})
        }
      }
    }
    return validMoves;
  }

  function randomMove(grid) {
    let options = getValidMoves(grid);
    let move = Math.floor(Math.random() * options.length);
    return options[move];
  }



window.onload = () => {

  const imagex = new Image();
  imagex.src = './images/player-x.svg';

  const imageo = new Image();
  imageo.src = './images/player-o.svg';

  let currTurn = 0;
  console.log(currTurn);

  const winDiv = document.getElementById("winner__sec")
  const newGameBtn = document.getElementById('new-game')
  const giveUpBtn = document.getElementById('give-up')
  const square00 = document.getElementById('square00');
  const square01 = document.getElementById('square01');
  const square02 = document.getElementById('square02');
  const square10 = document.getElementById('square10');
  const square11 = document.getElementById('square11');
  const square12 = document.getElementById('square12');
  const square20 = document.getElementById('square20');
  const square21 = document.getElementById('square21');
  const square22 = document.getElementById('square22');
  const tictactoe = document.getElementById('tictactoe');

  //restore session
  console.log(sessionStorage.getItem('state'));
  if(sessionStorage.getItem('state')){
    const sessionState = JSON.parse(sessionStorage.getItem('state'))
    console.log(sessionState);
    table = sessionState;
    console.log('restoring table:', table)
    // console.log('session state:',sessionState);
    for(let i = 0; i < sessionState.length; i++) {
      for(let j = 0; j < sessionState[i].length; j++){
        const ele = document.getElementById(`square${i}${j}`);
        // console.log(`${i}${j}`, sessionState[i][j])
        // console.log('testing all squares:', ele)
        if(sessionState[i][j] === '') {
          continue;
        }else if(sessionState[i][j] === 'X') {
          const turn = imagex.cloneNode();
          ele.appendChild(turn);
        } else {
          const turn = imageo.cloneNode();
          ele.appendChild(turn);
        }
      }
    }
  }
  // if(sessionStorage.getItem('currTurn')) {
  //   currTurn = sessionStorage.getItem('currTurn')
  // }


  function setMove(element) {
    // console.log(moves)
    const row = element.dataset.row
    const col = element.dataset.col
    const strMove = `${String(row)}${String(col)}`
    // console.log(strMove)

    if(!moves.has(strMove)){
      if(currTurn === 0) {
        const turn = imagex.cloneNode();
        element.appendChild(turn);
        currTurn = 1;
        moves.add(strMove);
        table[row][col] = 'X'
        newGameBtn.setAttribute('disabled', '')
        giveUpBtn.removeAttribute('disabled')
      }
      // else {
      //   // const turn = imageo.cloneNode();


      //   // console.log('table: ', table)
      //   // console.log('testing valid moves')
      //   // console.log('valid moves: ', getValidMoves(table))
      //   // const randMove = randomMove(table)
      //   // const strMove = `${String(randMove.row)}${String(randMove.col)}`
      //   // table[randMove.row][randMove.col] = 'O'
      //   // moves.add(strMove);
      //   // const element = document.getElementById(`square${randMove.row}${randMove.col}`)
      //   // setTimeout(() => {
      //   //   element.appendChild(turn);
      //   // }, 1000)

      //   // currTurn = 0;
      // }
    } else {
      alert('Invalid Move')
    }
    if(gameEnd(table) && !isTie(table)){
      createWinDiv('Winner:', gameEnd(table), winDiv)
      newGameBtn.removeAttribute('disabled')
      giveUpBtn.setAttribute('disabled', '');
      console.log(table)
      // currTurn = 0;
    }
    else {
      if(isTie(table)) {
        createWinDiv('', isTie(table), winDiv)
        newGameBtn.removeAttribute('disabled')
        giveUpBtn.setAttribute('disabled', '');
        // currTurn = 0;
      }
    }

      if(currTurn === 1) {
        const turn = imageo.cloneNode();


        console.log('table: ', table)
        console.log('testing valid moves')
        console.log('valid moves: ', getValidMoves(table))
        const randMove = randomMove(table)
        const strMove = `${String(randMove.row)}${String(randMove.col)}`
        table[randMove.row][randMove.col] = 'O'
        moves.add(strMove);
        const element = document.getElementById(`square${randMove.row}${randMove.col}`)

          element.appendChild(turn);
        currTurn = 0;

         if(gameEnd(table) && !isTie(table)){
          createWinDiv('Winner:', gameEnd(table), winDiv)
          newGameBtn.removeAttribute('disabled')
          giveUpBtn.setAttribute('disabled', '');
          console.log(table)
          // currTurn = 0;
        } else {
          if(isTie(table)) {
            createWinDiv('', isTie(table), winDiv)
            newGameBtn.removeAttribute('disabled')
            giveUpBtn.setAttribute('disabled', '');
            // currTurn = 0;
          }
        }
   }
    console.log('curr Turn moves: ', currTurn);
    let state = JSON.stringify(table);
    console.log('state:', state)
    sessionStorage.setItem('state', state);
    sessionStorage.setItem('currTurn', currTurn);
  }



  square00.addEventListener("click", e => {
    // console.log(e.target);
    currElement = e.target;
    setMove(currElement);
  })
  square01.addEventListener("click", e => {
    // console.log(e.target);
    currElement = e.target;
    setMove(currElement);
  })
  square02.addEventListener("click", e => {
    // console.log(e.target);
    currElement = e.target;
    setMove(currElement);
  })
  square10.addEventListener("click", e => {
    // console.log(e.target);
    currElement = e.target;
    setMove(currElement);
  })
  square11.addEventListener("click", e => {
    // console.log(e.target);
    currElement = e.target;
    setMove(currElement);
  })
  square12.addEventListener("click", e => {
    // console.log(e.target);
    currElement = e.target;
    setMove(currElement);
  })
  square20.addEventListener("click", e => {
    // console.log(e.target);
    currElement = e.target;
    setMove(currElement);
  })
  square21.addEventListener("click", e => {
    // console.log(e.target);
    currElement = e.target;
    setMove(currElement);
  })
  square22.addEventListener("click", e => {
    // console.log(e.target);
    currElement = e.target;
    setMove(currElement);
  })

  newGameBtn.addEventListener('click', e => {
    newGame(tictactoe, winDiv);
    newGameBtn.removeAttribute('disabled')
    giveUpBtn.setAttribute('disabled', '');
    // currTurn = 0;
    sessionStorage.clear("currTurn");
  })

  giveUpBtn.addEventListener('click', e => {

    console.log('cuur turn:', currTurn)
    if(currTurn === 0) {
      createWinDiv('Winner:', 'O', winDiv)
    } else {
      createWinDiv('Winner:', 'X', winDiv)
    }
    setTimeout(() => {
      newGame(tictactoe, winDiv);
      // currTurn = 0;
    }, 1500)
    newGameBtn.removeAttribute('disabled')
    giveUpBtn.setAttribute('disabled', '');
    sessionStorage.clear("currTurn");
  })

  document.addEventListener('click', (e) => {
    const circle = document.createElement('div');
    // const circle2 = document.createElement('div');
    circle.classList.add('circle');
    // circle2.classList.add('circle2');

    circle.style.left = e.clientX - 20 + 'px';
    circle.style.top = e.clientY -20 + 'px';
    // circle2.style.left = e.clientX - 20 + 'px';
    // circle2.style.top = e.clientY -20 + 'px';
    document.body.appendChild(circle);
    // document.body.append(circle2);

    // Trigger a reflow to apply the initial styles before transitioning
    circle.getBoundingClientRect();
    // circle2.getBoundingClientRect();

    // Apply transition styles for growing and disappearing
    circle.style.transform = 'scale(3)';
    circle.style.opacity = '0';
    // circle2.style.transform = 'scale(2.5)';
    // circle2.style.opacity = '1';

    // Apply the transitionend event listener to the circle element

      circle.addEventListener('transitionend', () => {
        if (circle.parentNode) {
          circle.parentNode.removeChild(circle);
        }
      });

      e.stopPropagation()
    // circle2.addEventListener('transitionend', () => {
    //   document.body.removeChild(circle2);
    // });
  });

}
