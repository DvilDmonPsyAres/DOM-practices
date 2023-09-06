// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Inline CSS with JavaScript</title>
//     <head>
//     <body>
//         <h1>Changing text color with JS</h1>
//         <ul>
//             <li>Apple</li>
//             <li>Orange</li>
//             <li>Banana</li>
//         </ul>
//         <script src="red-text.js"></script>
//     </body>
// </html>


// red-text.js
const redText = () => {
  const fruits = document.getElementsByTagName("li");
  const apple = fruits[0];

  apple.style.color = "red";
}

window.onload = redText;
