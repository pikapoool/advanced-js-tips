// doesn't care about where the todos came from, it just knows it gets a list of todos and should display some area to render them in.
import { TodoItem } from "./Todoitem";

const TodosList = ({ todos }) => {
  const renderTodos = () =>
    todos.map((todo) => <TodoItem id={todo.id} title={todo.title} />);

  return <ul>{renderTodos()}</ul>;
};
