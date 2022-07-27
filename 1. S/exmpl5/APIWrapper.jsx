// doesn't care about formatting anything or the todos. It just deals with retrieving them and sending them over the TodosList.
export const APIWrapper = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const firstTen = data.slice(0, 10);
      setTodos(firstTen);
    }
    getTodos();
  }, []);

  const todoListWithTodos = React.Children.map(children, (child) => {
    return React.cloneElement(child, { todos: todos });
  });

  return <div>{todos.length > 0 ? todoListWithTodos : null}</div>;
};
