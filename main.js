// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


console.groupCollapsed('Kata 1')
const element = document.createElement('h1')
element.append('Kata 1')
main.append(element)
const truIsActive = users.filter(user => user.IsActive ===true)
main.append(JSON.stringify(truIsActive))
console.groupEnd()

console.groupCollapsed('Kata 2')
const toInput = document.createElement('h1')
toInput.append('Kata 2')
main.append(toInput)
const userEmail = users.map(user => user.email)
main.append(JSON.stringify(userEmail))
console.groupEnd()

console.groupCollapsed('Kata 3')
const seeApp = document.createElement('h1')
seeApp.append('Kata 3')
main.append(seeApp)
const ovationcompany = users.some(user => user.company)
main.append(JSON.stringify(ovationcompany))
//console.groupEnd()

console.groupCollapsed('Kata 4')
const campAge = document.createElement('h1')
campAge.append('Kata 4')
main.append(campAge)
const userAge = users.find(user => user.age > 38)
main.append(JSON.stringify(userAge))
console.groupEnd()

console.groupCollapsed('Kata 5')
const firstUser = document.createElement('h1')
firstUser.append('Kata 5')
main.append(firstUser)
const userActive = users
    .filter(user => user.age > 38)
    .find(user => user.isActive)
    main.append (JSON.stringify(userActive))
console.groupEnd()

console.groupCollapsed('Kata 6')
const userBalance = document.createElement('h1')
userBalance.append('Kata 6')
main.append(userBalance)
const balances = users 
    .filter(user => user.company === 'ZENCO')
     .map(user => user.balance)
main.append(JSON.stringify(balances))
console.groupEnd()

console.groupCollapsed('Kata 7')
const fugiat = document.createElement('h1')
fugiat.append('Kata 7')
main.append(fugiat)
const ageOfUser = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)
main.append(JSON.stringify(ageOfUser))
console.groupEnd()