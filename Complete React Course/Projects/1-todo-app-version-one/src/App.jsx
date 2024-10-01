import AppName  from "./Components/AppName";
import Addtodo from "./Components/AddToDO";
import Task1 from "./Components/Task1";
import Task2 from "./Components/Task2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
       <AppName/>
       <Addtodo/>
       <div className="items-container">
       <Task1/>
       <Task2/>
       </div>
       
    </center>
  );
}

export default App;
 