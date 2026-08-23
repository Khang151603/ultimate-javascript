// local/global variable
// scope: function scope, block scope

/* var
- scope: function scope
- hoisting - nó sẽ đưa các tên biến với khai báo var, function lên đầu file
- allow assignment
*/
var a;

console.log('before  a: ', a)
var a = 10; // global variables
console.log('after a: ', a)

funcA();
function funcA() {
  console.log('functionA')
}

/* let
- scope: block scope
- not hoisting
- allow assign
*/
let x = 10; // global variables

/* const
- scope: block scope
- not hoisting
- not assign
*/

/* standalize term
- pure function - ko dc thay đổi variable ở ngoài
- input && output
*/

const numberA = 10; // global variable
function getMonth(number) {
  // 1 - jan. 2 - feb, 3 - march
  let month = ''; 

  if (number === 1) {
    month = 'jan'
  }
  if (number === 2) {
    month = 'feb'
  }
  if (number === 3) {
    month = 'march'
  }
  return month; // output
};
const months = getMonth(2);
console.log('months: ', months)