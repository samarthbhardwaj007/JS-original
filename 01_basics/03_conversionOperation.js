let score = "33"
let scoree = "abs"

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof score)
console.log(typeof valueInNumber)

console.log(typeof scoree)
console.log(typeof (scoree))

let valueInNumberr = Number(scoree)
console.log(typeof scoree)
console.log(valueInNumberr)

// "33" => 33
// "abs" => NaN not in number, which means it cannot be converted
//if we give score = true, it will give the output as 1

let isloggedIN = 1
let booleanIsLoggedIn = Boolean(isloggedIN)
console.log(booleanIsLoggedIn)

let somenumber = 33
let stringnumber = String(somenumber)
console.log(stringnumber)