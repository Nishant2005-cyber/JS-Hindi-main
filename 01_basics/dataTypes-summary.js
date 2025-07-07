// primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Nishant",
    age: 19,
};

const myFunction = function(){
    console.log("hello world");
    
}

// console.log(typeof heros);

// Stack (Primitive), Heap (Nom-Primitive)

let myYoutubename = "NishantKhandelwaldotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nishant@goole.com"

console.log(userOne.email);
console.log(userTwo.email);