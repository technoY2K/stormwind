const numbers = [12, 5, 8, 130, 44]

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
