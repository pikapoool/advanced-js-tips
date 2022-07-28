// SINGLE INHERITANCE
// Prototype chain inheritance
let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let dog = Object.create(animal);

dog.walk(); // Animal walk
rabbit.walk(); // Animal walk

// Functional Inheritance
function Person(data) {
  var that = {};
  that.name = data.name;
  return that;
}

// Create a child object, to inherit from the base Person
function Employee(data) {
  var that = Person(data);
  that.sayHello = function () {
    return "Hello, I'm " + that.name;
  };
  return that;
}

var myEmployee = Employee({ name: "Rufi" });
console.log(myEmployee.sayHello());

// Class inheritance
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.size = function() {
  return this.width * this.height;
}

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

var square = new Square(2);
var rectangle = new Rectangle(2, 4);

console.log(square.size()); // => 4
console.log(rectangle.size()); // => 8

console.log(rectangle.prototype); // => undefined
console.log(rectangle.__proto__ === Rectangle.prototype); // => true
console.log(square.__proto__ === Square.prototype); // => true

console.log(rectangle instanceof Rectangle); // => true
console.log(rectangle instanceof Square); // => false

console.log(square instanceof Rectangle); // => true
console.log(square instanceof Square); // => true

// MULTIPLE INHERITANCE
(function () {
  function EventEmitter() {
    this._listeners = {};
  }

  EventEmitter.prototype.on = function (eventName, listener) {
    if (!this._listeners[eventName]) {
      this._listeners[eventName] = [];
    }

    this._listeners[eventName].push(listener);
  };

  EventEmitter.prototype.off = function (eventName, listener) {
    if (!this._listeners[eventName]) {
      return;
    }

    this._listeners[eventName] = this._listeners[eventName].filter(function (
      it
    ) {
      return it !== listener;
    });
  };

  EventEmitter.prototype.trigger = function (eventName, args) {
    if (!this._listeners[eventName]) {
      return;
    }

    this._listeners[eventName].forEach(function (listener) {
      listener.apply(null, args);
    });
  };

  var emitter = new EventEmitter();
  var listener = function (data) {
    console.log("event triggered with", data);
  };

  emitter.on("event", listener);
  emitter.trigger("event", ["data"]);

  function EventEmitterMixin(prototype) {
    prototype.on = function (eventName, listener) {
      if (!this._listeners) {
        this._listeners = {};
      }

      if (!this._listeners[eventName]) {
        this._listeners[eventName] = [];
      }

      this._listeners[eventName].push(listener);
    };

    prototype.off = function (eventName, listener) {
      if (!this._listeners) {
        this._listeners = {};
      }

      if (!this._listeners[eventName]) {
        return;
      }

      this._listeners[eventName] = this._listeners[eventName].filter(function (
        it
      ) {
        return it !== listener;
      });
    };

    prototype.trigger = function (eventName, args) {
      if (!this._listeners) {
        this._listeners = {};
      }

      if (!this._listeners[eventName]) {
        return;
      }

      this._listeners[eventName].forEach(function (listener) {
        listener.apply(null, args);
      });
    };
  }
  function Rectangle(width, height) {
    this.setWidth(width);
    this.setHeight(height);
    this._calculateArea();
  }

  Rectangle.prototype = {
    constructor: Rectangle,

    setWidth: function (width) {
      this._width = width > 0 ? width : NaN;
      this._calculateArea();
    },
    getWidth: function () {
      return this._width;
    },

    setHeight: function (height) {
      this._height = height > 0 ? height : NaN;
      this._calculateArea();
    },
    getHeight: function () {
      return this._height;
    },

    _calculateArea: function () {
      this._area = this._width * this._height;
    },
    getArea: function () {
      return this._area;
    },
  };

  function Square(size) {
    Rectangle.call(this, size, size);
  }

  Square.prototype = Object.create(Rectangle.prototype);
  Square.prototype.constructor = Square;

  EventEmitterMixin(Square.prototype);

  Square.prototype._calculateArea = function () {
    Rectangle.prototype._calculateArea.call(this);
    this.trigger("areaChanged", [this._area]);
  };

  Square.prototype.setWidth = Square.prototype.setHeight = function (size) {
    Rectangle.prototype.setWidth(size);
    Rectangle.prototype.setHeight(size);
    this._calculateArea();
  };

  var s = new Square(4);
  s.on("areaChanged", function (area) {
    console.log("area changed to", area);
  });

  s.setWidth(2);
})();
