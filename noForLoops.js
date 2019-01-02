const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// link to MDN for loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

function loop(begin, end) {
  if (begin > end) return
  console.log(begin)
  loop(begin + 1, end)
}

loop(1, 10)

function printToConsole(number, index) {
  console.log(number)
}

function printToConsoleWithIndex(number, index) {
  console.log(number, `Index is ${index}`)
}

numbers.forEach(printToConsoleWithIndex)
