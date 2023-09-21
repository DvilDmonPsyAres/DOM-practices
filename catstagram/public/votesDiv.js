//votes Listener
function votesListener(popularityScore) {
  const upVote = document.getElementById('upvote')
  const downVote = document.getElementById('downvote')
  const score = document.getElementById('popScore')

    upVote.addEventListener('click', e => {
      console.log('clicking upvote')
      popularityScore++;
      score.innerText = `Popularity Score : ${popularityScore}`
      localStorage.setItem('ps', popularityScore)
      console.log(popularityScore)
    })
    downVote.addEventListener('click', e => {
      console.log('clicking downvote')
      popularityScore--;
      score.innerText = `Popularity Score : ${popularityScore}`
      localStorage.setItem('ps', popularityScore)
    })
  }

export const createVotesDiv = () => {
  // popularity score row
  let popularityScore;
  const main = document.getElementById('main')
  if(localStorage.ps) {
    popularityScore = localStorage.ps;
  } else {
    popularityScore = 0;
  }

  const newP = document.createElement('p');
  newP.setAttribute('id', 'popScore')
  newP.innerText = `Popularity Score : ${popularityScore}`;
  // buttons for votes DIV
  const newDiv = document.createElement('div');
  const upvote = document.createElement('button');
  upvote.innerText = 'Upvote';
  upvote.setAttribute('id', 'upvote')
  const downvote = document.createElement('button');
  downvote.innerText = 'Downvote';
  downvote.setAttribute('id', 'downvote');
  newDiv.append(upvote)
  newDiv.append(downvote);
  //
  main.appendChild(newP)
  main.appendChild(newDiv)
  setTimeout(()=> {
    votesListener(popularityScore);
  }, 1000)
}
