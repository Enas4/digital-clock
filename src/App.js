import { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();

  const [currTime, setCurrTime] = useState(time);

  let updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="App">
      <h1>DIGITAL CLOCK</h1>
      <h1>{currTime}</h1>
    </div>
  );
}

export default App;
