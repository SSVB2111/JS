let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getMilliseconds());
// console.log(date.getMilliseconds());
// console.log(date.toJSON());

// let myCreatedDate = new Date(2026, 4, 6, 5, 1)
// console.log(myCreatedDate);
// myCreatedDate = new Date(2026, 4, 6)
// console.log(myCreatedDate.toString());
// myCreatedDate = new Date(2026, 4, 6, 1, 5)
// console.log(myCreatedDate.toString());
// myCreatedDate = new Date(2026, 4, 6, 1, 5, 87)
// console.log(myCreatedDate.toString());
// myCreatedDate = new Date(2026, 4, 6, 1, 5, 7)
// console.log(myCreatedDate.toString());
myCreatedDate = new Date("01-09-2028")
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myTimeStamp.toPrecision())
console.log(Math.floor(Date.now() / 1000))

console.log(date.getMonth() + 1)
console.log(date.getDay());

console.log(date.toLocaleString('default', {
    weekday: "long"
}))