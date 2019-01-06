const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i])
// }

function loop(index, arr) {
  if (index >= arr.length) return

  console.log(arr[index])
  loop(index + 1, arr)
}

loop(0, numbers)

function printToConsole(number, index, arr) {
  console.log(number)
}

function printToConsoleWithIndex(number, index, arr) {
  console.log(number, `Index is ${index}`)
}

function double(number, index, arr) {
  arr[index] = number * 2
}

numbers.forEach(double)

console.log(numbers)
