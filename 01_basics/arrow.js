const user = {
    username: "Shlok Bhoyar",
    roll: 45,

    welcomeMsg: function () {
        //console.log(`${username}, welcome to the codebase`)
        // can't run because wecan't directly access the var due to scope issues.
        // for this we use the (this) key word for giving it the value of current context.
        // as the username and values will change the output of the console will also change
        console.log(`${this.username}, welcome to the codebase...`)
        console.log(this)
    }
}

// user.welcomeMsg()
// user.username = "Naomi" //context is chnged 
// user.welcomeMsg()
// console.log(this) // context is empty {}

// function myChai() {
//     //console.log(this)
//     let a = 89
//     console.log(this.a) // will give undefined as (this) does not work here for this type of function
// }

// myChai() // undefined output

// const myPizza = function () {
//     let orderNo = 768790
//     console.log(this.orderNo) // will give undefined as (this) does not work here for this type of function
// }

// myPizza() // undefined output

// const myFood = () => {
//     let orderNo = 768790
//     console.log(this.orderNo)
// }

// myFood()


const variable = () => {
    console.log("help")
}

variable()

const sum = (a, b) => a + b // implicit return => return in () is using implicit 

console.log(sum(34, 43))