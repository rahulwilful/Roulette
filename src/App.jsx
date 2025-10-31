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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Wheel /> */}
    <BallTimer />
    {/* <WheelTimer/> */}
      {/* <StartTimer /> */}
      {/*  <Stopwatch /> */}
      {/*  <NumberDashboard /> */}
      {/*  <Timer /> */}
      {/* <Sample /> */}
    </>
  );
}

export default App;
