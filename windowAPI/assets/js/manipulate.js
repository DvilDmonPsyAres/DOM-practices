export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    // Your code here
    window.document.title = "Imotechnologics"
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name
    document.body.children[0].children[0].innerText = "Alan Garza"
    // Your code here
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    // Your code here
    document.body.children[1].children[1].innerText = "Passionate JavaScript Developer: I'm a passionate software engineer with a deep love for JavaScript. I thrive on solving complex problems and building elegant, user-friendly applications using this versatile language."
}
