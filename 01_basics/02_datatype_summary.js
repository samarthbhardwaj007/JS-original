// deffrentiated in primitive and non primitive

// # PRIMITIVE 
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt
// the simplest and most basic forms of data that are immutable (cannot be changed) and directly represent a single value

const score = 100
const scorevalue = 10.3
const scoree = true // because javascript is a dynamically typed language
const outsideTemp = null
let userEmail

// symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId) // false
console.log()

// let can be re-assigned and const cannot be re-assigned


console.log(score)
console.log(+scoree)
console.log(scoree)

// #NON PRIMITIVE or REFRENCE TYPE
// array, objects, functions

const heros = ["iron-man", "captain america", "black widow", "shaktiman"]

let myObject = {
        name : "samarth",
        age : 22,
}

const myFunction = function(){
    console.log("hello world")
}
// to get the type of the datatype use 'typeof'