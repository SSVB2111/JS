// function calcPrize(num1) {
//     return num1;
// }
// console.log(calcPrize(89));


// function calcPrize(...num1) { // the rest operator converts all the incoming values to a array...
//     return num1;
// }
// console.log(calcPrize(89, 89, 90, 100, 1001001, 10038, 1329884)); 


function calcPrize(val1, val2, ...num1) {
    return num1
}

console.log(calcPrize(89, 92, 94, 2929, 392)) //starting two vals were val1 and val2. And num1 has 94, 2929, and 392.

const user = {
    name: "shlok",
    roll: 89,
    isLoggedIn: true
}

function handleObj(obj) {
    console.log(`The name is: ${obj.name}`)
}

// handleObj(user);

handleObj({
    name: "shrikant"
})

console.log(add(5, 6))
function add(a, b) {
    return a + b
}
console.log(add(5, 6))

console.log(sub(5, 6)) // (error)This is due to Hoisting -> this is the issue when the functions are devcalred in the variable format
const sub = function (a, b) {
    return a - b
}
console.log(sub(5, 6))