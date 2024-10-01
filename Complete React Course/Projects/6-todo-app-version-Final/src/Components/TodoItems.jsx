import { TodoItemsContext } from "./store/to-do-items-store";
import Task from "./Task";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
const TodoItems = () => {
  const {todoItems}= useContext(TodoItemsContext);

  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
          <Task
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
          
          ></Task>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
