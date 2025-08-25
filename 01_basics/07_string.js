const name = 'samarth'
const age = 22

console.log(`my name is ${name} and my age is ${age}`) // backticks are used

const gamename = new String(`samarth`)
console.log(gamename)
console.log(gamename[0])
//length
console.log(gamename.length)
console.log(gamename.toUpperCase) // toLowerCase
console.log(gamename.charAt(5)) 
console.log(gamename.indexOf('t'))

const newString = gamename.substring(0,4)
console.log(newString)

const anotherString = gamename.slice(-8,4)
console.log(anotherString)

const newStringOne = "  hitrsh  "
console.log(newStringOne)
console.log(newStringOne.trim()) // it will valcel all the starting ansenging spaces

const url = "http://samarthbhrdwaj.com/hitesh%20bhardwaj"


console.log(url.replace('%20', '_'))
console.log(url.includes('samarth'))

console.log(gamename.split('-'))