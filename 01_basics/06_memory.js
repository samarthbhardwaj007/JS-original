// memory is of two types
// #1 stack(PRIMITIVE) and #2 heap(NON-PRIMITIVE)
// STACK MEMORY - jo bhi change karenge original mein change nahi hoga
// HEAP MEMORY - jo bhi change karenge original mein change ho hi jayega

let myYoutube = "lakshayChaudhary" // ye jayega stack main

let anotherName = myYoutube

console.log(anotherName)
console.log()

anotherName ="chaiaurcode"

console.log(anotherName) // change is only made in this not in myYoutube
console.log(myYoutube)

let user1 = {
    email : "abc123@gmail.com",
    upi : "abcpaytm"
}

let user2 = user1 // ye object banaye hain

console.log(user2)

user2.upi = "abcphonepay"

console.log(user2)
console.log(user1) // original function mein bhi change ho gaya hai