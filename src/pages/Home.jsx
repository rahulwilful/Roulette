import React, { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import NumberDashboard from "../components/NumberDashboard";
import StartTimer from "../components/StartTimer";
import BallTimer from "../components/BallTimer";
import WheelTimer from "../components/WheelTimer";

const Home = () => {
  const [showStartTimer,setShowStartTimer] = useState(true)
  const [showNumberDashboard,setShowNumberDashboard] = useState(false)
  const [showBallTimer,setShowBallTimer] = useState(false)
  const [showWheelTimer,setShowWheelTimer] = useState(false)

  const changePage = (para) => {
    if(para == 'startTimer'){
      setShowStartTimer(true)
      setShowBallTimer(false)
      setShowNumberDashboard(false)
      setShowWheelTimer(false)
    }
   
     if(para == 'numberBoard'){
      setShowStartTimer(false)
      setShowBallTimer(false)
      setShowNumberDashboard(true)
      setShowWheelTimer(false)
    }
      if(para == 'ballTimer'){
      setShowStartTimer(false)
      setShowBallTimer(true)
      setShowNumberDashboard(false)
      setShowWheelTimer(false)
    }
      if(para == 'WheelTimer'){
      setShowStartTimer(false)
      setShowBallTimer(false)
      setShowNumberDashboard(false)
      setShowWheelTimer(true)
    }

  }

  const getStartingNUmber = (para) => {
    console.log("para: ",para)
  }

  return (
    <div className="vh-100 d-flex flex-column">
      <Header changePage={changePage} />

      <div className={`${showStartTimer ? '':'d-none'} h-100 w-100`}>
        <StartTimer />
      </div>
      <div className={`${showNumberDashboard ? '':'d-none'}  h-100 w-100`}>
        <NumberDashboard getStartingNUmber={getStartingNUmber} />
      </div>
      <div className={`${showBallTimer ? '':'d-none'}  h-100 w-100`}>
        <BallTimer />
      </div>
      <div className={`${showWheelTimer ? '':'d-none'}  h-100 w-100`}>
        <WheelTimer />
      </div>
    </div>
  );
};

export default Home;
