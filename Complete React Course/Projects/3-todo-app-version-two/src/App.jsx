import AppName  from "./Components/AppName";
import Addtodo from "./Components/AddToDO";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '18/01/2024'
    },
    {
      name: 'Go to College',
      dueDate: '18/01/2024'
    },
    {
      name: 'Push ups',
      dueDate: '30/03/2024'
    },
  ]
  return (
    <center classNameName="todo-container">
       <AppName/>
       <Addtodo/>
       <TodoItems todoItems={todoItems}></TodoItems>
     
       
    </center>
  );
}

export default App;
 