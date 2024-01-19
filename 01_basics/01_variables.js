const accountId = 12455
let accountEmail = "ayush@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;
// accountId = 2 // not allowed it is defined 

accountEmail = "a@hotmail.com"
accountPassword = "321321"
accountCity = "bhubaneswar"

/*
Prefer not to use var because of issue in block scope and functional scope 
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
