// singleton


// object literals 

const mySym = Symbol("key1")


const JsUser = {
    name: "Nishant",
    "full name": "Nishant Khandelwal",
    [mySym]: "mykey1",
    age: 19,
    location: "Alwar",
    email: "nishant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "nishant@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "nishant@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
