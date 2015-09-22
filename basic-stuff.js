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


// Question 5: Make them bark
//
// You have been hired by a dogbreeder to write a program to keep record of his dogs.
// You've already made a constructor Dog, so no one has to hardcode every puppy.
// The work seems to be done. It's high time to collect the payment.
// ..hold on! The dogbreeder says he wont pay you, until he can make every dog object .bark().
// Even the ones already done with your constructor. "Every dog barks" he says. He also refuses to rewrite them, lazy as he is.
// You can't even count how much objects that bastard client of yours already made. He has a lot of dogs, and none of them can .bark().
//
// Can you solve this problem, or will you let this client outsmart you for good?
//
// Practical info:
//
// The .bark() method of a dog should return the string 'Woof!'.
// The contructor you made (it is preloaded) looks like this:
function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}
// Answer - YES
Dog.prototype.bark = function(){return'Woof!'}

// Question 6: original
// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contains any char.
//
// ANSWER: YES

function XO(str) { return ((str.match(/o/ig) || []).length == (str.match(/x/gi) || []).length)};

//Question 7: original
// Write a small function that returns the values of an array that are not odd.
//
// All values in the array will be integers. Return the good values in the order they are given.
//
// Answer - Yes

function noOdds( values ){
  arr = values.filter(function(n){
    if(n == 0 ){
      return true;
    } else if( n % 2 === 0){
      return true;
    }
  })
  console.log(arr);
  return arr
}
noOdds([0,1,2,3,4,5,6])
