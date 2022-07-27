// 3. The Liskov Substitution Principle - duck typing (необходимо, чтобы дочерние классы могли бы служить заменой для своих родителей).
// If you're extending from a class, make sure the base class is as generic as needed to be a true representation of every subclass.

class Square {
	getWidth() {
		return 100;
	}
	getHeith() {
		return getWidth();
	}
}
class Rectangle extends Square {
	getWidth() {
		return 200;
	}
	getHeigth() {
		return 100;
	}
}
// для Square подходит, для Rectangle нет
function foo(shape) {
	const size = shape.getWidth() * shape.getWidth();
}

// ********************************************************************************************************

class Geometry {
  getArea() {}
}
class SquareGeometry extends Geometry {
  getArea() {
    return this.size * this.size;
  }
}
class RectangleGeometry extends Geometry {
  getArea() {
    return this.width * this.height;
  }
}
class Square {
  constructor() {
    this.geometry = new SquareGeometry();
  }
}
class Rectangle {
  constructor() {
    this.geometry = new RectangleGeometry();
  }
}
const s = new Square();
s.geometry.size = 10;
console.log(s.geometry.getArea());
