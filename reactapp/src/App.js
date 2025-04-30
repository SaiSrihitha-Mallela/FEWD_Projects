
import './App.css';
// import Arrow from './components/Arrow';
// import Bind from './components/Bind';
// import EventHandler from './components/EventHandler';
// import EventOnMouse from './components/EventOnMouse';
// import FocusAndBlur from './components/FocusAndBlur';
// import QuizApp from './components/QuizApp';

import Child from "./components/eventhandlers/MethodAsProps";
import Weather from './components/WeatherApp/Weather';

function App() {

  const greet = () => {
    alert("Hello From App.js");

  }

  return (
    <div className="App">
      {/* <QuizApp/> */}
      {/* <FocusAndBlur/>
      <EventHandler/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <EventOnMouse/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
{/* 
      <Bind/>

      <Arrow/> */}

      {/* <Child greet={greet} /> */}

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
        <Weather/>
        {/* Other homepage sections */}
      </div>





      


    </div>
  );
}

export default App;
