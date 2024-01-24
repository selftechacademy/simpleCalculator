import React, { useState } from "react";
import CustomButton from "../../components/customButton/CustomButton";

import "./arrowApp.style.css";

const ArrowApp = () => {
  const [isUp, setIsUp] = useState(true);

  const onUpClick = () => {
    setIsUp(!isUp);
  };

  // const onDownClick = () => {
  //   setIsUp(false);
  // };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <CustomButton text={isUp ? "down" : "up"} onClickHandler={onUpClick} />
        {/* <CustomButton text="down" onClickHandler={onDownClick} /> */}
      </div>
      <div className="arrow-box">
        <p>{isUp ? "⬆️" : "⬇️"}</p>
      </div>
    </div>
  );
};

export default ArrowApp;
