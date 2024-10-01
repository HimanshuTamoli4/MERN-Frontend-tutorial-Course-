import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "./store/to-do-items-store";

const WelcomeMessage = ( ) => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>No More tasks Enjoy Your Day</p>
    )
  );
};

export default WelcomeMessage;
