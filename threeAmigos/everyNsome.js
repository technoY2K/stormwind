const numbers = [12, 5, 8, 130, 44]

const melissa = { first: 'Melissa', last: 'Gallo',   isNice: true }
const john    = { first: 'John',    last: 'Mclane',  isNice: true }
const tabby   = { first: 'Tabitha', last: 'Hillard', isNice: false }
const jessica = { first: 'Jessica', last: 'Parker',  isNice: false }

function isBigEnough(number, index) {
  return number >= 5;
}

function isSmallerThan(value) {
  function everyFunc(number, index) {
    return number < value
  }

  return everyFunc
}

const result = numbers.every(isBigEnough)

if (result) {
  console.log('yay it passed')
} else {
  console.log('no it did not pass')
}

/*
  some example
*/

const numbers = [11, 5, 9, 131, 45]

function isOdd(number, index, array) {
  return number % 2 === 1
}

function isEven(number, index, array) {
  return number % 2 === 0
}

numbers.some(isOdd)
