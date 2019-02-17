// Arrays
const numbers = [1, 2, 3, 4, 5, 6, 7]

// rest example
const [one, two, ...rest] = numbers

// better default example
const domain = 'example.org'

const [host, tld = 'net'] = domain.split('.')

// spread
const oddNumbers  = [1, 3, 5]
const evenNumbers = [2, 4, 6]

const combined = [ ...evenNumbers, ...oddNumbers, 6, 7, ]
