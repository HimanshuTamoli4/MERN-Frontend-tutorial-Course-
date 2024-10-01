import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  //let foodItems = ["Torai", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let textStateArr = useState("food Items Entered By A user ");  
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

 // let [textToShow,setTextState]  = useState();   // short hand of use state
  let [foodItems ,setfoodItems] = useState([]);

  const onKeyDown= (event)=>{
    if(event.key === 'Enter'){
      let newfoodItem = event.target.value;
      event.target.value = '';
      let newItems = [...foodItems, newfoodItem];
      setfoodItems(newItems);

    }
   }
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>  
        <FoodInput handleKeyDown = {onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage> 
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
      <p>The above list is a list of Healthy Food items that are good form Health and
        well being
      </p>
    </Container> */}
    </>
  );
}

export default App;
