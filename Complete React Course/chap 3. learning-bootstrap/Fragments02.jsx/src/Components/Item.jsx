import styles from "./item.module.css"


const Item = ({foodItem ,bought, BuyButtonClicked}) => {
 
  return (
    <li  className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
     <span className={styles["kg-span"]}>{foodItem}</span> 
     <button className={`${styles.button} btn btn-info `}
     onClick={BuyButtonClicked}
     >Buy</button>
    </li> 
  );
};

export default Item;
