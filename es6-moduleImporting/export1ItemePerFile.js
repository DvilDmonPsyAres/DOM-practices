// Exporting one item per file
// You can export a single item per file by using an export default statement with ES6 module syntax. For instance, the example below will only export the Wallet class from the file. The resulting export is considered unnamed.

/* ES6 Modules */
export default class Wallet {
  // ...
}

// sayHello will not be exported
function sayHello() {
  console.log('Hello!');
}
