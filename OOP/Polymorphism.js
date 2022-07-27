// Subtype Polymorphism
class Animal {
  animalSound() {
    console.log("The animal makes a sound");
  }
}

class Pig extends Animal {
  animalSound() {
    // super.animalSound(); // call parent method
    console.log("The pig says: wee wee");
  }
}

class Dog extends Animal {
  animalSound() {
    console.log("The dog says: bow wow");
  }
}

let animal = new Animal();
let pig = new Pig();
let dog = new Dog();

animal.animalSound();
pig.animalSound();
dog.animalSound();

// Operator Overloading
5 + 5; 
'I am' + ' ' + '5 years old'

// Parametric Polymorphism
const Ann = { firstName: "Ann", Age: 4, Adult: false };

const id = (x) => x;
id(1);
id("foo");

// https://blog.sessionstack.com/how-javascript-works-3-types-of-polymorphism-f10ff4992be1

