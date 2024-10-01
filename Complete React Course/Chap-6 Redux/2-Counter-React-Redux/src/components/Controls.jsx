import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncreament = () => {
    dispatch({ type: "INCREAMENT" });
  };
  const handleDecreament = () => {
    dispatch({ type: "DECREAMENT" });
  };
  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };
  const handleAdd = () => {
    
    dispatch({ type: "ADD" , payload:{
      num : inputElement.current.value ,
    },
  });
  inputElement.current.value = "";
  };

  const handleSubtract= () => {
    
    dispatch({ type: "SUBTRACT" , payload:{
      num : inputElement.current.value ,
    },
  });
  inputElement.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncreament}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecreament}
        >
          -1
        </button>
        <button
          type="button"f
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-3 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          ref={inputElement}
          placeholder="Enter number"
          className="number-input"
        />
        <button type="button" className="btn btn-info"
         onClick={handleAdd}
        >
          ADD
        </button>
        <button type="button" 
        onClick={handleSubtract}
        className="btn btn-danger">
          SUBTRACT
        </button>
      </div>
    </>
  );
};

export default Controls;
