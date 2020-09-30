// 5. The Dependency Inversion Principle - Depend on abstractions, not on concretions.
// (Модули верхних уровней не должны зависеть от модулей нижних уровней. Все модули должны зависеть от абстракций. Абстракции не должны зависеть от деталей а наоборот - детали от абстракций).

// Decoupling:
// - Inversion of control -> Dependency Injection
// - Dependency Inversion -> Interfaces

class Fetch {
  request(url) {
    return Promise.resolve("data from fetch");
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = "data from local storage";
    return dataFromLocalStorage;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    return this.fetch.request("vk.com");
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  clientGet(key) {
    return this.localStorage.get(key);
  }
}

class Database {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet(key);
  }
}

const db = new Database(new LocalStorageClient());

console.log(db.getData("rand"));
