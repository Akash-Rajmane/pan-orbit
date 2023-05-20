import React from "react";
import Wave from "../../components/wave/Wave";
import AccountBox from "./AccountBox";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <div className="wave-container">
        <Wave />
      </div>
      <AccountBox />
    </div>
  );
};

export default Landing;
