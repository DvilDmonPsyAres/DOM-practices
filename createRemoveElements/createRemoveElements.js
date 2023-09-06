const removeSecondDiv = () => {
  const secondDiv = document.getElementById("2");
  secondDiv.remove();
}

window.onload = removeSecondDiv;

const addElement = () => {
  // create a new h1 element

// document.body.innerText = "<h1>Imotechnologics!</h1>";
// document.body.innerHTML = "<h1>Imotechnologics!</h1>";
  const newElement = document.createElement("h1");

  // and give it some text
  newElement.innerText = "Jell-O, Burled!";

  // add the newly created element and its content into the DOM
  document.body.appendChild(newElement);


};
// run script when page is loaded
// window.onload = addElement;
