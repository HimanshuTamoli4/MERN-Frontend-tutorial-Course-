import ClockHeading from './Components/ClockHeading';
import ClockSlogan from './Components/ClockSlogan';
import CurrentTime from './Components/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'

export function App() {


  return (
    <center>
     <ClockHeading></ClockHeading>
     <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;