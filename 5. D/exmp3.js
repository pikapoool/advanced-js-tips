// 5. The Dependency Inversion Principle - Depend on abstractions, not on concretions.
// (Модули верхних уровней не должны зависеть от модулей нижних уровней. Все модули должны зависеть от абстракций. Абстракции не должны зависеть от деталей а наоборот - детали от абстракций).

class XMLHttpService extends XMLHttpRequestService {}

class Http {
  constructor(private xmlhttpService: XMLHttpService) {}
  get(url: string, options: any) {
    this.xmlhttpService.request(url, 'GET')
  }
  post(url: string) {
    this.xmlhttpService.request(url, 'POST')
  }
}

// ********************************************************************************************************

interface Connection {
  request(url: string, options: any);
}

class Http {
  constructor(private httpConnection: Connection) {}
  get(url: string, options: any) {
    this.httpConnection.request(url, 'GET')
  }
  post(url: string) {
    this.httpConnection.request(url, 'POST')
  }
}

class XMLHttpService implements Connection {
  const xhr = new XMLHttpRequest();
  // ...
  request(url: string, options: any) {
    xhr.open();
    xhr.send();
  };
}
