const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seeded = document.getElementsByClassName('seed');
    console.log(seeded)

    // 2. Get all seedless fruit elements
    // Your code here
    const seedless = document.getElementsByClassName('seedless');
    console.log(seedless);

    // 3. Get first seedless fruit element
    // Your code here
    const seed1 = document.querySelector('.seed');
    console.log(seed1);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const textYou = document.querySelector('#wrapper').children[0].children[0];
    console.log(textYou);
    // 5. Get all children of element "wrapper"
    const wrapperChilds = document.querySelector('#wrapper').children
    // Your code here
    console.log(wrapperChilds)
    // 6. Get all odd number list items in the list
    // Your code here
    const odds = document.getElementsByClassName('odd');
    console.log(odds)

    // 7. Get all even number list items in the list
    // Your code here
    const olChildrens = document.querySelector('ol').children
    const olEvenChilds = [olChildrens[1], olChildrens[3]]
    console.log(olEvenChilds)

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const google = document.querySelector('#three').children[1].children[0]
    console.log(google)
    // 9. Get "Amazon" list element
    // Your code here
    const amazon = document.querySelector('.shopping');
    console.log(amazon)

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicornLi = document.querySelector('#three').children[3].children;
    console.log(unicornLi)
    debugger
}

window.onload = select;
