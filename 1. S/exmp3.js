// 1. The Single Responsibility Principle - A module should be responsible to one, and only one, actor. (Должен иметь одну причину для изменения)

class Animal {
  constructor(name: string) {}
  getAnimalName() {}
  saveAnimal(a: Animal) {}
}

// ********************************************************************************************************

class Animal {
  constructor(name: string) {}
  getAnimalName() {}
}

class AnimalDB {
  getAnimal(a: Animal) {}
  saveAnimal(a: Animal) {}
}
