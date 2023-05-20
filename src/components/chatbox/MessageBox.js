import React from "react";
import "./messagebox.css";
import * as Unicons from "@iconscout/react-unicons";

const MessageBox = ({ setShowMsgBox }) => {
  return (
    <div className="msg-container">
      <div className="msg-header">
        <p className="msg-head-context">
          <img
            className="msg-img"
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg"
            alt="Ervin Howell"
          />
          <span className="msg-name">Ervin Howell</span>
          <span className="close-icon" onClick={() => setShowMsgBox(false)}>
            x
          </span>
        </p>
      </div>
      <div className="msgs">
        <p className="msg">Lorem ipsum dolor sit amet, consectetur</p>
        <p className="msg">Lorem ipsum dolor sit</p>
        <p className="other-msg">Lorem ipsum </p>
      </div>
      <input type="text" />
      <span className="send-icon">
        <Unicons.UilMessage />
      </span>
    </div>
  );
};

export default MessageBox;
