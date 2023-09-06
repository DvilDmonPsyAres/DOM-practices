/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const breed = url.split('/')[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */

        // Your code here
        const newLiElement = document.createElement('li')
        const newFigure = document.createElement('figure')
        const newImage = document.createElement('img');

        newImage.setAttribute('src', url)
        newImage.setAttribute('alt', breed)

        const newCaption = document.createElement('figcaption')
        newCaption.innerText = breed;

        newFigure.appendChild(newImage);
        newFigure.appendChild(newCaption);
        newLiElement.appendChild(newFigure);

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const ul = document.querySelector('ul')
        ul.appendChild(newLiElement);

        //debugger

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstItem = document.querySelector('ul').children[0];


    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    if(firstItem) {
        try {
            firstItem.remove()
        } catch(error) {
            console.error('Error: ', error);
        }
    }
    // debugger;
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const index = document.querySelector('ul').children.length;
    const lastItem = document.querySelector('ul').children[index-1]

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    if(lastItem) {
        try {
            lastItem.remove()
        } catch(error) {
            console.error('Error: ', error);
        }
    }
    debugger;
});
