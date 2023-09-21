export const setImage = (catData) => {
  const imgDiv = document.createElement('div');
  imgDiv.setAttribute('id', 'imgDiv');
  const newP = document.createElement('p');
  newP.innerText = "Catstagram"
  imgDiv.appendChild(newP)

  const image = new Image()
  image.setAttribute('src', `${catData}`)
  image.setAttribute('style', `width:550px; height:550px;`)

  imgDiv.appendChild(image)
  const main = document.getElementById('main')
  main.appendChild(imgDiv)
}
