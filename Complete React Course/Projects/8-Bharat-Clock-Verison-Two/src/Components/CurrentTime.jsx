import { useEffect, useState } from "preact/hooks";

let CurrentTime = () => {
 const [time,setTime] = useState( new Date());

    useEffect(()=>{
      console.log("Interval Has been setup");
       const intervalId = setInterval(()=>{
          setTime(new Date());
       },1000); 
       return ()=>{
        clearInterval(intervalId);
        console.log("Cancelled The Interval");  
       }
    } , [])
  
  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
