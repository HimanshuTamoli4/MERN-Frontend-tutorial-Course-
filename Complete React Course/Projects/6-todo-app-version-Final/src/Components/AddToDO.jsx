import {useRef } from "react";
import { IoBagAddOutline } from "react-icons/io5";
import { useContext } from "react";
import { TodoItemsContext } from "./store/to-do-items-store";
function Addtodo() {
  const {addNewItem} = useContext(TodoItemsContext);
 
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter task here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>

        <div className="col-2">
          <button className="btn btn-success kg-button ">
            <IoBagAddOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
