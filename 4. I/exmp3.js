// 4. The Interface Segregation Principle - Make fine grained interfaces that are client specific
// (Создавайте узкоспециализированные интерфейсы, предназначенные для конкретного клиента. Клиенты не должны зависеть от интерфейсов, которые они не используют).

interface Shape {
  drawCircle();
  drawSquare();
  drawRectangle();
}

class Circle implements Shape {
  drawCircle() { ... };
  drawSquare() {... };
  drawRectangle() { ... };
}

// ********************************************************************************************************

interface Shape {
  draw();
}
interface ICircle {
  drawCircle();
}
interface ISquare {
  drawSquare();
}
interface IRectangle {
  drawRectangle();
}

class Circle implements ICircle {
  drawCircle() { ... };
}

// ********************************************************************************************************

function load(isAsync, checkCache) {
  // load data
}

function loadSync(checkCache) {
  // load data sync
}
function loadAsync(checkCache) {
  // load data async
}
