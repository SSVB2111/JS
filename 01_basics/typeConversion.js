/*
let num = 33
console.log(typeof num); // number
let numToString = String(num);
console.log(typeof numToString); //string
let numToBool = Boolean(num);
console.log(typeof numToBool);


let boolVal = false
console.log(boolVal + " " + typeof (boolVal)); 
let newBoolVal = String(boolVal); 
console.log(newBoolVal); // false inString = "false"
newBoolVal = Number(newBoolVal);
console.log(newBoolVal); // "false" inNumber = NaN
newBoolVal = Number(boolVal); 
console.log(newBoolVal); // false -> inNumber = 0;



let someString = "false"; 
let newVar = Boolean(someString); // "false" -> None-empty-string => true
console.log(newVar + " " + typeof newVar); 
let anotherString = "";
newVar = Boolean(anotherString); // "" -> "Empty String" + false
console.log(newVar + " " + typeof newVar);

*/

let aVal = null
let thatVal = Boolean(aVal);
console.log(thatVal);
thatVal = String(aVal);
console.log(thatVal);
thatVal = Number(aVal);
console.log(thatVal);

//only errors, as value is not defined initially
let aVal = undefined
let thatVal = Boolean(aVal);
console.log(thatVal);
thatVal = String(aVal);
console.log(thatVal);
thatVal = Number(aVal);
console.log(thatVal);

