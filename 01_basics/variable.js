//  const value is not changeable
const accountId = 12345

// let value can be changed but insdie a valid block or functional scope.
let accountEmail = 'mayankmawri776@gmail.com'

/* Prefer not to use var because of issue of block or functional scope.
var accountPassword = "123456780"
accountCity = "Delhi"
*/
let accountState;

// accountId = 3 // Not Allowed
accountEmail = "hc.com"
accountPassword = "54321"
accountCity = "uttrakhand"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
