// Your code here


console.log('hello worlds')

// function createCat(data) {
//   console.log('testing: ', data);
//   const newCats = data;
//   newCats.forEach(element => {
//     console.log(element)
//     for(const keys in element) {
//       console.log(keys);
//     }
//     console.log('element url: ', element.url)
//   });
// }

function createCatDiv(catData) {
  const newDiv = document.createElement('div')
  const image = new Image()
  const newP = document.createElement('p');
  newP.innerText = "Kitten pic"
  image.setAttribute('src', `${catData[0].url}`)
  image.setAttribute('style', `width:550px; height:550px;`)
  image.url = catData[0].url
  console.log(image.url)
  newDiv.appendChild(newP)
  newDiv.appendChild(image)
  const main = document.getElementById('main-section')
  main.appendChild(newDiv)
}


window.onload = () => {
  console.log('loaded')
  const getCat = document.getElementById('get-cat');
  getCat.addEventListener('click', e => {
    // console.log('clickedd event:', e)
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => res.json())
      .then(resBody => {
       console.log('res Body: ', resBody)
       createCatDiv(resBody)
      })
      .catch(error => {
        console.error('Error:', error);
      })
  })
}

// fetch("https://api.thecatapi.com/v1/images/search")
//   .then(res => res.json())
//   .then(resBody => console.log(resBody))
//   .catch(error => {
//     console.error('Error:', error);
//   })
