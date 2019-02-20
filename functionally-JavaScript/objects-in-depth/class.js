class Animal {
  constructor(name) {
    this.name = name
  }

  eat() {
    console.log('nom nom nom')
  }

  sleep() {
    console.log('zzzZZZzzz')
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name)
    this.breed = breed
  }

  bark() {
    console.log('woof woof')
  }
}

const rover = new Dog('Rover', 'Minischnauzer')
