// Here's the syntax to create an event listener:

Element.addEventListener(eventType, callbackFunction)


// <!DOCTYPE html>
// <html>
//   <head>
//     <script src="script.js"></script>
//   </head>
//   <body>
//     <button id="increment-count">I have been clicked <span id="clicked-count">0</span> times</button>
//   </body>
// </html>

// script.js

window.addEventListener("DOMContentLoaded", event => {
  const button = document.getElementById("increment-count");
  const count = document.getElementById("clicked-count");
  let clicks = 0;
  button.addEventListener("click", event => {
    clicks += 1;
    count.innerHTML = clicks;
  });
});

// Note here that event listeners must be declared inside the callback of a DOMContentLoaded event if script.js is imported in the <head>. This is because the script will run sequentially as the HTML is being parsed and the <body> will not have been parsed. This means .getElementById() calls will return undefined and the event listeners won't be created.




// Let's practice displaying an element when the box is checked and hiding it when the box is unchecked. You'll pretend you're on a pizza delivery website, and you're filling out a form for pizza toppings. There is a checkbox on the page for extra cheese, and when a user checks that box you want to show a div with pricing info. Set up your HTML file with a checkbox and div to show/hide, as well as a link to our JavaScript file:

// <!DOCTYPE html>
// <html>
//   <head>
//     <script src="script.js">
//   </head>
//   <body>
//     <h1>Pizza Toppings</h1>
//     <input type="checkbox" id="on-off">
//     <label for="on-off">Extra Cheese</label>
//     <div id="now-you-see-me" style="display:none">Add $1.00</div>
//   </body>
// </html>



// In the script.js file, you'll set up an event listener for DOMContentLoaded again to make sure the checkbox and div have loaded. Then, you'll write JavaScript to show div#now-you-see-me when the box is checked and hide it when the box is unchecked.

// script.js

window.addEventListener("DOMContentLoaded", event => {
  // store the elements you need in variables
  const checkbox = document.getElementById("on-off");
  const divShowHide = document.getElementById("now-you-see-me");
  // add an event listener for the checkbox click
  checkbox.addEventListener("click", event => {
    // use the 'checked' attribute of checkbox inputs
    // returns true if checked, false if unchecked
    if (checkbox.checked) {
      // if the box is checked, show the div
      divShowHide.style.display = "block";
      // else hide the div
    } else {
      divShowHide.style.display = "none";
    }
  });
});






// Instead, you could add a show or hide class to the div based on the checkbox and keep our display:block and display:none in CSS. That way, you could reuse the classes on different elements, as well as see class names change in the HTML. Here's how the code you wrote above would look if you used CSS classes:

// script.js
// you need to wait for the stylesheet to load
window.onload = () => {
  // store the elements you need in variables
  const checkbox = document.getElementById("on-off");
  const divShowHide = document.getElementById("now-you-see-me");
  // add an event listener for the checkbox click
  checkbox.addEventListener("click", event => {
    // use the 'checked' attribute of checkbox inputs
    // returns true if checked, false if unchecked
    if (checkbox.checked) {
      // if the box is checked, show the div
      divShowHide.classList.remove("hide");
      divShowHide.classList.add("show");
      // else hide the div
    } else {
      divShowHide.classList.remove("show");
      divShowHide.classList.add("hide");
    }
  });
};
// Here's the accompanying CSS and HTML replacing the style attribute with the hide class:

// .show {
//   display: block;
// }
// .hide {
//   display: none;
// }
<div id="now-you-see-me" class="hide">Add $1.00</div>










// Handling a user input value
// You've learned a lot about event handling so far! Let's do one more exercise to practice event handling using an input. In this exercise, you'll write JavaScript that will mirror the text in input#original in a div whenever the user types.

// Let's set up an HTML file with the input and a placeholder for the user to type in, and the div that will mirror the text

// <!DOCTYPE html>
// <html>
//   <head>
//     <script src="script.js">
//   </head>
//   <body>
//     <input id="original" type="text" placeholder="Type here">
//     <div id="mirrored"></div>
//   </body>
// </html>
{/* Now let's set up our Javascript, using the input event to capture keystrokes:

// script.js
// run when the DOM is ready */}
window.addEventListener("DOMContentLoaded", event => {
  const mirroredDiv = document.getElementById("mirrored");
  const originalText = document.getElementById("original");
  originalText.addEventListener("input", event => {
    let text = originalText.value;
    mirroredDiv.innerText = text;
  })
});

// To get the value of input#original, a variable has to be created to store a reference to the element. The event object that is passed as the second parameter in the addEventListener() method actually stores a reference to the element on which the event occurred on in event.target. Here's the same code using the event.target object instead.

window.addEventListener("DOMContentLoaded", event => {
  const mirroredDiv = document.getElementById("mirrored");
  document.getElementById("original")
    .addEventListener("input", event => {
      mirroredDiv.innerText = event.target.value;
    })
});




// We'll use DOMContentLoaded to add CSS classes to page elements immediately after they are loaded. Let's add the CSS class "i-got-loaded" to the body element when the window fires the DOMContentLoaded event. We can do this in the script block or in an external JS file, as we did in the examples above.

// Javascript

window.addEventListener("DOMContentLoaded", event => {
  document.body.className = "i-got-loaded";
});
// After adding the Javascript above, refresh the HTML in your browser, inspect the page, and notice that the body element now has a class of "i-got-loaded".
