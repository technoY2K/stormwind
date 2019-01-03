const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(total, curr, index, arr) {
  return total += curr
}

const result = numbers.reduce(sum, 0)

const melissa = { first: 'Melissa', last: 'Gallo',   isNice: true }
const john    = { first: 'John',    last: 'Mclane',  isNice: true }
const tabby   = { first: 'Tabitha', last: 'Hillard', isNice: false }
const jessica = { first: 'Jessica', last: 'Parker',  isNice: false }

const friends = [melissa, john, tabby, jessica]

function convertToObj(obj, friend, index) {
  obj[index] = friend.first
  return obj
}

const friendObj = friends.reduce(convertToObj, {})

console.log(friendObj)
