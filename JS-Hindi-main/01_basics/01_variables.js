const accountId = 14322
let accountEmail = "nishant@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "NcNc@google.com"
accountPassword = "26363"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
