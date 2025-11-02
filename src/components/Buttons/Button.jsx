import React from "react";

const Button = ({
  title,
  bgColor,
  px,
  py,
  p,
  pt,
  pe,
  ps,
  pb,
  func,
  font,
  fontSize,
}) => {
  return (
    <button
      style={{
        minWidth: 70,
        borderRadius: 7,
        boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.25)",
        backgroundColor:bgColor ? bgColor :"#593FEB"
      }}
      onClick={func}
      className={`btn  text-light pointer d-flex justify-centent-center align-items-center  `}
    >
      <span className=" w-100">

      {title}
      </span>
    </button>
  );
};

export default Button;
