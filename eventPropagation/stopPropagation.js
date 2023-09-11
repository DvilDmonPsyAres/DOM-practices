// How can you stop this unintended behavior from occurring? The answer is with the event.stopPropagation() method which stops the bubbling from continuing up the parent chain. Here's what it would look like on the <video> element:

// Javascript

window.addEventListener('DOMContentLoaded', event => {
  document
    .querySelector('video')
    .addEventListener('click', event => {
      event.stopPropagation();
      video.play();
    });
});
