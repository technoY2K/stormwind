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
