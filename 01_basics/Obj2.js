// let user2 = new Object(); // one kind of declaration
// let user3 = {}; // 2nd type of declaration

// user3.id = 583492;
// user3.name = "Shlok Bhoyar"
// user3.clg = "Ycce"
// user3.roll = 54
// user3.marks = 600

// console.log(user3);

const user = {
    age: 18,
    name: {
        firstName: "Shlok",
        midName: "Vivek",
        lstName: "Bhoyar"
    }
}

// // console.log(user)
// console.log(user.name)
// console.log(user.name.midName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 2: "a", 3: "b" }
const obj4 = { 7: "a", 8: "b" }

// let obj3 = { obj1, obj2 }
// console.log(obj3)
// obj3 = Object.assign({}, obj1, obj2, obj4) // target -> {} , source -> obj1,obj2,obj3
// console.log(obj3)

const obj3 = { ...obj1, ...obj2 }
console.log(obj3)

const Users = [
    {
        id: 5879384,
        name: "shashi"
    },
    {
        id: 5879384,
        name: "shashi"
    },
    {
        id: 5879384,
        name: "shashi"
    },
    {
        id: 5879384,
        name: "shashi"
    }
]

console.log(Users)
console.log(Users[1])
console.log(Users[1].id)
console.log(Object.keys(Users))
console.log(Object.keys(user))
console.log(Object.keys(user.name))
console.log(Object.values(Users))

console.log(Users.hasOwnProperty('name'))
console.log(user.hasOwnProperty('name'))


//destructing -> de structuring a obj

const { name } = user;   // no need of (user.name) -> simply use (name)


console.log(name);

const { name: newName } = user; // can also change the name to newName.using different name for the object variable

console.log(name)