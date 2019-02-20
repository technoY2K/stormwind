const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const melissa = { first: 'Melissa', last: 'Gallo',   isNice: true }
const john    = { first: 'John',    last: 'Mclane',  isNice: true }
const tabby   = { first: 'Tabitha', last: 'Hillard', isNice: false }
const jessica = { first: 'Jessica', last: 'Parker',  isNice: false }

const friends = [melissa, john, tabby, jessica]

function isEven(number) {
  return number % 2 === 0
}

function isOdd(number) {
  return number % 2 !== 0
}

const result = numbers.filter((false) ? isEven : isOdd)

console.log(result)
console.log(numbers, 'original array')

function isNice(friend, index) {
  return friend.isNice === true
}

function isMean(friend, index) {
  return friend.isNice === false
}

const filteredFriends = friends.filter(isMean)

console.log(filteredFriends)
