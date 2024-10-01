import Task from "./Task";
import styles from './TodoItems.module.css';
const   TodoItems = ({todoItems}) => {
return <>
      <div classNameName= {styles.itemsContainer}>
      {todoItems.map(item => <Task todoDate= {item.dueDate} todoName= {item.name} ></Task> )}
      
       </div>
</>
};

export default TodoItems;