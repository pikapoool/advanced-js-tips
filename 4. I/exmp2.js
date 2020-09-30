// 4. The Interface Segregation Principle - Make fine grained interfaces that are client specific
// (Создавайте узкоспециализированные интерфейсы, предназначенные для конкретного клиента. Клиенты не должны зависеть от интерфейсов, которые они не используют).

class Animal {
  constructor(name) {
    this.name = name
  }

  walk() {
    console.log(`${this.name} умеет ходить`)
  }

  swim() {
    console.log(`${this.name} умеет плавать`)
  }

  fly() {
    console.log(`${this.name} умеет летать`)
  }
}

class Dog extends Animal {
  fly() {
    return null
  }
}

class Eagle extends Animal {
  swim() {
    return null
  }
}

class Whale extends Animal {
  fly() {
    return null
  }

  walk() {
    return null
  }
}

// ********************************************************************************************************

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} умеет плавать`);
  },
};

const flier = {
  fly() {
    console.log(`${this.name} умеет летать`);
  },
};

const walker = {
  walk() {
    console.log(`${this.name} умеет ходить`);
  },
};

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog("Рэкс");
dog.walk();
dog.swim();

const eagle = new Eagle("Орел");
eagle.fly();
eagle.walk();

const whale = new Whale("Большой синий друг");
whale.swim();
