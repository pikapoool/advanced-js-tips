// 5. The Dependency Inversion Principle - Depend on abstractions, not on concretions.
// (Модули верхних уровней не должны зависеть от модулей нижних уровней. Все модули должны зависеть от абстракций. Абстракции не должны зависеть от деталей а наоборот - детали от абстракций).

// Decoupling:
// - Inversion of control -> Dependency Injection
// - Dependency Inversion -> Interfaces

import { Http } from '';

class SomeService {
	constructor() {
		this.http = new Http();
	}
	getUsers() {
		return this.http.get('users').then(...);
	}
}
describe('SomeService -', function() {
	it('should', function() {
		var service = new SomeService();
		expect(service.getUsers()).to.be(['User1']);
	})
})

// ********************************************************************************************************

// Inversion of control (Dependency Injection) - pass in constructor
class SomeService {
	constructor(http) {
		this.http = http;
	}
	getUsers() {
		return this.http.get('users').then(...);
	}
}
describe('SomeService -', function() {
	it('should', function() {
		var service = new SomeService(
			new MockHttp(['User1'])
		);
		expect(service.getUsers()).to.be(['User1']);
	})
})

// Dependency Inversion
class IHttp {
	get(url): any;
}
class Http implements IHttp {
	get(url) {}
}
class MockHttp implements IHttp {
	constructor(d) {}
	get(url) {...}
}
class SomeService {
	http: IHttp;
	constructor(http: IHttp) {
		this.http = http;
	}
	getUsers() {
		return this.http.get('users').then(...);
	}
}

