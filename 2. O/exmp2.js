// 2. The Open Closed - A software artifact should be open for extension but closed for modification.

class Animal {
  constructor(name: string) {}
  getAnimalName() {}
  saveAnimal(a: Animal) {}
}

const animals: Array<Animal> = [
  new Animal('lion'),
  new Animal('mouse'),
]

function AnimalSounds(a: Array<Animal>) {
  for (let i = 0; i < a.length; i++) {
    if (a[i].name === 'lion'){
      return 'roar';
    }
    if (a[i].name === 'mouse') {
      return 'squeak';
    }
    
  }
}

AnimalSounds(animals);

// *********************************************

class Animal {
  makeSound() {}
}

class Lion extends Animal {
  makeSound() {
    return "roar";
  }
}

class Mouse extends Animal {
  makeSound() {
    return "squeak";
  }
}

function AnimalSounds(a: Array<Animal>) {
  a.map(c => c.makeSound());
}

const animals: Array<Animal> = [new Lion(), new Mouse()];

AnimalSounds(animals);
