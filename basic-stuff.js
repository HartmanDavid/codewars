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
