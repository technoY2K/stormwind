// Arrays
const numbers = [1, 2]

const [one, two] = numbers

// better default example
const domain = 'example.org'

const [host, tld = 'net'] = domain.split('.')
