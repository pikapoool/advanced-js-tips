// doesn't care about the todos, how they are retrieved, or how they are formatted. It just knows it needs to display a page which will contain them.
import { APIWrapper } from "./APIWrapper"
import { TodosList } from "./TodoList"

const TodosPage = () => {
  const todos = useTodos();

  // using custom hooks example
  // return (
  //   <div>
  //     <h1>My Todos</h1>
  //     <TodosList todos={todos}/>
  //   </div>
  // ) 
  
  return (
    <div>
      <h1>My Todos</h1>
      <APIWrapper>
        <TodosList />
      </APIWrapper>
    </div>
  )
}