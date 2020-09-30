// 3. The Liskov Substitution Principle - duck typing (необходимо, чтобы дочерние классы могли бы служить заменой для своих родителей).
class Component {
  isComponent = true;
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`;
  }
}

class HigherOrderComponent extends Component {}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error("Render is impossible here");
  }

  wrapComponent(component) {
    component.wrapped = true;
    return component;
  }
}

function renderComponent(component) {
  console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());