//get the text field that we're going to track
let field = document.getElementById("field");

//see if we have autosave value
//(this will only happen if the page is accidentally refreshed)
if(sessionStorage.getItem("autosave")) {
  //restore the contents of the text field
  field.value = sessionStorage.getItem("autosave");
}

//Listen for changes in the text field
field.addEventListener("change", function () {
  //And save the results into the session storage object
  sessionStorage.setItem("autosave", field.value);
});
