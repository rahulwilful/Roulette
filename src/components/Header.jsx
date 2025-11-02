import React from "react";
import Button from "./Buttons/Button";

const Header = ({changePage}) => {
  const sampleFunc = (para) => {
    console.log("para ", para);
    changePage(para)
  };

  return (
    <div
      className={`container border d-flex justify-content-evenly gap-2 w-100  px-1 py-3 overflow-auto      `}
    >
      <Button func={() => sampleFunc("startTimer")} title="Start" />
      <Button func={() => sampleFunc("numberBoard")} title="Board" />
      <Button func={() => sampleFunc("ballTimer")} title="Ball" />
      <Button func={() => sampleFunc("WheelTimer")} title="Wheel" />
      <Button func={() => sampleFunc("Result")} title="Result" />
    </div>
  );
};

export default Header;
