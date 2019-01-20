// const dog = {
//   breed: 'mini',
//   name: 'sparky',

//   eat() {
//     console.log('yum')
//   },

//   sleep() {
//     console.log('zzzzzz')
//   }
// }

// const cat = {
//   breed: 'tabby',
//   name: 'sphinx',

//   eat() {
//     console.log('yum')
//   },

//   sleep() {
//     console.log('zzzzzz')
//   }
// }

// const horse = {
//   breed: 'mustang',
//   name: 'ford',

//   eat() {
//     console.log('yum')
//   },

//   sleep() {
//     console.log('zzzzzz')
//   }
// }

// const dog2 = {
//   breed: 'frenchie',
//   name: 'rover',

//   eat() {
//     console.log('yum')
//   },

//   sleep() {
//     console.log('zzzzzz')
//   }
// }


// factory function solution
// step 1
const animal = {
   eat() {
    console.log('nom nom nom')
  },

  sleep() {
    console.log('zzzzzz')
  }
}

const dog = Object.create(animal);

dog.breed = 'mini'
dog.name  = 'sparky'

dog.eat()

const cat = Object.create(animal);

cat.breed = 'tabby'
cat.name  = 'spinx'

cat.sleep()

// step 2
function animalCreator(proto, attributes) {
  return Object.assign(Object.create(proto), attributes)
}

// function constructor solution
function Animal(name) {
  this.name  = name
}

Animal.prototype.eat = function() {
   console.log('nom nom nom')
}

Animal.prototype.sleep = function() {
  console.log('zzzZZZzzz')
}

function Dog(name, breed) {
  Animal.call(this, name)
  this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.bark = function() {
  console.log('woof woof')
}

Dog.prototype.constructor = Dog
