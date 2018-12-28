const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const melissa = { first: 'Melissa', last: 'Gallo',   isNice: true }
const john    = { first: 'John',    last: 'Mclane',  isNice: true }
const tabby   = { first: 'Tabitha', last: 'Hillard', isNice: false }
const jessica = { first: 'Jessica', last: 'Parker',  isNice: false }

const friends = [melissa, john, tabby, jessica]

function mirror(number, index, array) {
  return number
}

function double(number, index, array) {
  return number * 2
}

const result = numbers.map(double)

console.log(result)

function makeNice(friend, index, array) {
  friend.isNice = true
  return friend
}

function makeNiceIfMean(friend, index, array) {
  if (friend.isNice === false) {
    friend.isNice = true
  }
  return friend
}

const changedFriends = friends.map(makeNiceIfMean)

console.log(changedFriends)
