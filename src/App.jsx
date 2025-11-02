import { useState } from "react";

import "./App.css";
import Sample from "./sample";
import Timer from "./Timer";
import NumberDashboard from "./components/NumberDashboard";
import Stopwatch from "./components/StopWatch";
import StartTimer from "./components/StartTimer";
import WheelTimer from "./components/WheelTimer";
import BallTimer from "./components/BallTimer";
import Wheel from "./components/Wheel";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="  ">

    <Home />
    </div>
   {/*  <Wheel /> */}
    {/* <BallTimer /> */}
    {/* <WheelTimer/> */}
      {/* <StartTimer /> */}
      {/*  <Stopwatch /> */}
       {/* <NumberDashboard /> */}
      {/*  <Timer /> */}
      {/* <Sample /> */}
    </>
  );
}

export default App;
