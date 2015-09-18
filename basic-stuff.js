// 1st problem original:
// function multiply(a, b){
//   a * b
// }

// solution- YES
 function multiply(a, b){
  return a * b
}

// 2nd Problem original:
//
// function Person(name){
//   this.name = name;
// }
//
// Person.prototype.greet = function(otherName){
//   return "Hi " + otherName + ", my name is " + name;
// }
//
//
// Solution- YES
function Person(name){
this.name = name;
}

Person.prototype.greet = function(otherName){
return "Hi " + otherName + ", my name is " + this.name;
}

// 3rd Problem original:
// Write a function insertDash(num) that will insert dashes ('-')
// between each two odd numbers in num. For example: if num is 454793
// the output should be 4547-9-3. Don't count zero as an odd number.
// answer- YES
function insertDash(num) {
    var arrFinal = [];
//     Convert num into a string and split each number individual into an array
    var arr = String(num).split("");
    for (i =0; i < arr.length; i++){
//     check if each index and its following index to see if odd
        if (Number(arr[i]) % 2 == 1 && Number(arr[i+1]) % 2 == 1){
//         If 'if' succeeds push to new array arrFinal a index 'i' plus '-'
            arrFinal.push(arr[i]+ '-');
          }else{
//         'if' failed -  push to new array arrFinal only index 'i'
          arrFinal.push(arr[i]);
          }
    }
  return arrFinal.join('');
}
  insertDash(122334455)

// 4th Origin problem:
// The Collatz Conjecture states that for any natural
// number n, if n is even, divide it by 2. If n is odd,
// multiply it by 3 and add 1. If you repeat the process
// continously for n, n will eventually reach 1.
//
// For example, if n = 20, the resulting sequence will be:
//
// [20, 10, 5, 16, 8, 4, 2, 1]
//
// Write a program that will output the length of the Collatz
// Conjecture for any given n. In the example above, the output
// would be 8.
//
// Answer - Yes
function collatz(n){
  var arr = [];
  for (var i = n; i > 1; i = n){
      if (n % 2 === 0){
        n = n / 2;
        console.log('eve',n);
        arr.push(n);
      }else{
        n = (n * 3) + 1;
        console.log('odd',n);
        arr.push(n);
      }
    }
    return (arr.length + 1);
}
