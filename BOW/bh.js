document.addEventListener('DOMContentLoaded', () => {
  // Your code here, including the console.log statement
  const win = window;
  const winNav = window.navigator;
  const winScreen = window.screen;
  const winLoc = window.location;
  const history = navigator.history


  console.log('winndow: ', win);
  console.log('winndow Navigator: ', winNav);
  console.log('winndow Screen: ', winScreen);
  console.log('winndow Location: ', winLoc);
  console.log('history coming: ', history);

  navigator.geolocation.getCurrentPosition(function(position) {
    // Handle the position data here
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }, function(error) {
    // Handle any errors here
    console.error('Error getting geolocation:', error);
  });

  return;
});

// window	The main browser window
// window.navigator	Information about the browser itself
// window.screen	The user's screen
// window.history	URLs visited by a user
// window.location
