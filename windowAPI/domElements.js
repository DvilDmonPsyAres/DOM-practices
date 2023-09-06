// Using the Window API to Access the DOM
// The window object, the core of the Browser Object Model (BOM), has a number of properties and methods that we can use to reference the window object.

// One of which is the document property, which represents the Document Object Model (DOM). window.document, or just simply document contains all the HTML elements that make up the DOM. All of these elements can be accessed and manipulated, if you know where in the DOM tree they are located. This includes elements that don't appear visually on screen, like everything inside the <head> tag.

// Change the document's title
window.document.title = "My Own Tab"

/* Select the div element from the tree by looking through the child elements
    in document.body.children to find the index */
    let div = document.body.children[1];

    // Repeat the process on the div to find the ul
    let ul = div.children[0];

    // Repeat one more time to select the third li element
    let thirdLi = ul.children[2];

    // Change the text to something new using the innerText property of an element
    thirdLi.innerText = "New Text"


//     <!DOCTYPE html>
// <html>
//   <head>
//     <title>DOM Manipulation Fun</title>
// <script src="list-change.js"></script>
//   </head>
//   <body>
//     <h1>Example Page</h1>
//     <div>
//         <ul>
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//         </ul>
//     <div>
//   </body>
// </html>



// Running a script on page load
// If you want to wait for all the other assets, including CSS, <img> tags, and other media, to load before running the script, you can use the window object property window.onload.

window.onload = () => {
  let div = document.body.children[1];
  let ul = div.children[0];
  let thirdLi = ul.children[2];

  thirdLi.innerText = "New Text";
};
