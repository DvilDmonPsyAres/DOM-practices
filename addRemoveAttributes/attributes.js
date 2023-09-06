{/* <div class="normal-div" id="first-div">
    <!-- contents of div -->
</div> */}

const firstDiv = document.getElementById("first-div");
firstDiv.getAttribute("class"); // "normal-div"


// <p id="example-paragraph">
//     <!-- contents of paragraph -->
// </p>

const paragraph = document.getElementById("example-paragraph");
paragraph.setAttribute("class", "summary");
paragraph.getAttribute("class"); // "summary"


// <button id="test-button" class="primary">Click me!</button>

const button = document.getElementById("test-button");
button.removeAttribute("class");
