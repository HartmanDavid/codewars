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
