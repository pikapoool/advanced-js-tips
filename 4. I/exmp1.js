// 4. The Interface Segregation Principle - Make fine grained interfaces that are client specific
// (Создавайте узкоспециализированные интерфейсы, предназначенные для конкретного клиента. Клиенты не должны зависеть от интерфейсов, которые они не используют).

class User {
	constructor() {
		this.other = new GodObject();
	}
	doSomething() {
		var result = [];
		var a = this.other.getA([1,2]);
		var b = this.other.getB('a', 'b');
		result.push(this.other.doSomething(a, b, 1, 3));
		
		var c = this.other.getC([1,2]);
		var e = this.other.getE('a', 'b');
		result.push(c + e);
		
		return result;
	}
}

// ********************************************************************************************************

class User {
  constructor() {
    this.other = new GodObject();
  }
  doSomething() {
    var result = [];
    var a = this.other.getA([1, 2]);
    var b = this.other.getB("a", "b");

    return this.other.doSomething(a, b, 1, 3);
  }
  doSomethingElse() {
    var c = this.other.getC([1, 2]);
    var e = this.other.getE("a", "b");

    return c + e;
  }
}
