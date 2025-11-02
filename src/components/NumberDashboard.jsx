import React, { useState } from "react";
import {
  RouletteNumbers,
  RouletteNumbersSorted,
} from "../constansts/rouletteNumbers";
import Container from "./Container";

const NumberDashboard = ({getStartingNUmber}) => {
  const [numbers, setNumbers] = useState(RouletteNumbersSorted);

  const SelectNumber = (selectedNumber) => {
    console.log(selectedNumber);
  };

  const toggleNumberFormat = () => {
    if (numbers == RouletteNumbersSorted) setNumbers(RouletteNumbers);
    else setNumbers(RouletteNumbersSorted);
  };

  return (
    <>
      <Container h100 center  py={4}>
      
        <div className="container ">
              <div className={`mb-2`}>
          <i onClick={toggleNumberFormat} className="bi fs-1 bi-sliders pointer">
            {" "}
          </i>
        </div>
          <div className="row ">
            {numbers.map((number, i) => (
              <button
                key={i}
                onClick={() => {
                  getStartingNUmber(number.number);
                }}
                className="d-flex col-2 border pointer btn justify-content-center fw-medium text-light fs-3 "
                style={{ backgroundColor: number.color }}
              >
                {number.number}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default NumberDashboard;
