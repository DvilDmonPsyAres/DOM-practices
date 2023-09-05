// Aliasing imports
// You can use an asterisk (*) to import an entire module's contents. Note that you must alias your imported object using the as keyword to be able to refer to it later. Aliasing can be used to namespace all the exported functions, constants, etc. from a file to wrap them into a single, easily referenced object.

// greetings.js
export function sayHello() {
  console.log('Hello!');
}

export const sayHi = () => {
  console.log('Hi!');
};


// newFile.js
import * as Greetings from 'greetings.js';

Greetings.sayHello(); // Hello!
Greetings.sayHi();    // Hi!


// You can also use aliasing to rename identically named functions or items from different files. For example, take the two Wallet classes below. Both classes are named Wallet, but they come from different files. The Wallet from the wallet1 file is aliased as W1 while the Wallet from the wallet2 file is aliased as W2 to differentiate between the two Wallet classes.

import { Wallet as W1 } from './wallet1';
import { Wallet as W2 } from './wallet2';

const w1 = new W1();
const w2 = new W2();
