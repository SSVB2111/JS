
//object literals

// const oneSym = Symbol("key1")
const oneSym = Symbol()
const User = {

    name: "Shlok",
    midName: "Vivek",
    lastName: "Bhoyar",
    clg: "YCCE",
    "Person gender": "Male",
    [oneSym]: "keys",
    age: 18,
    loc: "Ngp",
    isPresent: true,
    lastAbsent: ["Monday", "Wednesday"],
    lastAbsentDate: [5 / 6 / 26, 2 / 7 / 26] // not valid -> need to convert to string
}

// console.log(User.age);
// console.log(User["age"]);
// console.log(User["gender"])
// console.log(User.gender)
// console.log(User["Person gender"])// -> as there is space between the variable, it won't be accessible by .age 
// //console.log(User.Person gender) //-> invalid
// console.log(User[oneSym])


// console.log(User)
// User.clg = "ÏIT Bombay"
// //Object.freeze(User) //  de freersing the object for additioin of greetings function
// User.clg = "NIT NGP"
// console.log(User)

User.greetings = function () {
    console.log("Hello!")
}
User.greetingPerson = function () {
    console.log(`Hello ${this.name}`)
}

User.greetingPerson()
