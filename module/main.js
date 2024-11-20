// main.js

// the following fuctions have been loaded to this main file
const f = require('./functions');

//please look at functions.js and observe the inputs that being asked to use then enter them and check if expected results were given



/*Find a function that takes one of the other functions is output and use that output to enter it as a function is input.

for example lets say we have function s
*
sell(money) =>{return money * 5}
moneyMade(sold) => {return 20 * sold}
****
This function returns some number so I can use that output in such manner

moneyMade(sell(10))

do something like this.

*/
let a = f.add(7,3)
let s = f.subtract(10, 7)
let m = f.add(19,10)
let v = f.subtract(98,23)
let b =f.add(45,4)
let d = f.add(8,2)
let t = f.subtract(98,23)
let g = f.subtract(91,29)
let donate = f.donatePoints(60, 10, 20)
console.log(a, s, m, v, b, d, t, g, donate)

