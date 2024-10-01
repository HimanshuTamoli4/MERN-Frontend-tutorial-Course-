import AppName from "./Components/AppName";
import Addtodo from "./Components/AddToDO";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";

import TodoItemsContextProvider from "./Components/store/to-do-items-store";



function App() {
  // const [todoItems, settodoItems] = useState([]);

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <Addtodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
