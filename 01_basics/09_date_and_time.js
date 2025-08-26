// date

let mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toDateString())
// console.log(typeof mydate)

let creatMyDate = new Date(2023, 0, 23) // months in javascrit start from zero
// console.log(creatMyDate.toDateString())
let creatMyDate2 = new Date("2003-01-14");  // ISO format
// console.log(creatMyDate2.toDateString());   // ✅

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(creatMyDate.getTime())

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())