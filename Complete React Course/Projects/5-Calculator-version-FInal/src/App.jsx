import styles from "./App.module.css";
 import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  let [calVal , setCalVal] = useState("");
  const onButtonClick = (buttonText)=>{
      if(buttonText === 'C'){
          setCalVal("");
      }
      else if(buttonText === '='){
       const result = eval(calVal);
       setCalVal(result);
      }
      else{
        const newdisplayValue = calVal +buttonText;
        setCalVal(newdisplayValue);
        
      }
  }
  return (
    <div className={styles.calculator}>
       <Display displayValue = {calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
