import React, { useState } from "react";
import "./chatbox.css";
import * as Unicons from "@iconscout/react-unicons";

const ChatBox = ({ setShowMsgBox, showMsgBox }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="chatbox-container">
      <div className="chatbox">
        <p
          className="chatbox-title"
          onClick={() => {
            setShow(!show);
            if (showMsgBox) {
              setShowMsgBox(false);
            }
          }}
        >
          <Unicons.UilCommentAlt />
          <span className="chatbox-text">Chats</span>
          <span className="angle-icon">
            {show ? <Unicons.UilAngleDown /> : <Unicons.UilAngleUp />}
          </span>
        </p>
      </div>
      {show && (
        <ul className="chat-content">
          <li onClick={() => setShowMsgBox(true)}>
            <img
              className="chat-img"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg"
              alt="Ervin Howell"
            />
            <span className="chat-name">Ervin Howell</span>
            <span className="dot">
              <svg width="26" height="26">
                <circle cx="10" cy="13" r="5" fill="green" />
              </svg>
            </span>
          </li>
          <li>
            <img
              className="chat-img"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg"
              alt="Clementine Bauch"
            />
            <span className="chat-name">Clementine Bauch</span>
            <span className="dot">
              <svg width="26" height="26">
                <circle cx="10" cy="13" r="5" fill="lightgrey" />
              </svg>
            </span>
          </li>
          <li>
            <img
              className="chat-img"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg"
              alt="Patricia Lebsack"
            />
            <span className="chat-name">Patricia Lebsack</span>
            <span className="dot">
              <svg width="26" height="26">
                <circle cx="10" cy="13" r="5" fill="lightgrey" />
              </svg>
            </span>
          </li>
          <li>
            <img
              className="chat-img"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg"
              alt="Chelsey Dietrich"
            />
            <span className="chat-name">Chelsey Dietrich</span>
            <span className="dot">
              <svg width="26" height="26">
                <circle cx="10" cy="13" r="5" fill="green" />
              </svg>
            </span>
          </li>
          <li>
            <img
              className="chat-img"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1006.jpeg"
              alt="Dennis Schulist"
            />
            <span className="chat-name">Dennis Schulist</span>
            <span className="dot">
              <svg width="26" height="26">
                <circle cx="10" cy="13" r="5" fill="green" />
              </svg>
            </span>
          </li>
          <li>
            <img
              className="chat-img"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1007.jpeg"
              alt="Kurtis Weissnat"
            />
            <span className="chat-name">Kurtis Weissnat</span>
            <span className="dot">
              <svg width="26" height="26">
                <circle cx="10" cy="13" r="5" fill="green" />
              </svg>
            </span>
          </li>
          <li>
            <img
              className="chat-img"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1008.jpeg"
              alt="Nicholas Runolf"
            />
            <span className="chat-name">Nicholas Runolf</span>
            <span className="dot">
              <svg width="26" height="26">
                <circle cx="10" cy="13" r="5" fill="lightgrey" />
              </svg>
            </span>
          </li>
          <li>
            <img
              className="chat-img"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1009.jpeg"
              alt="Glenna Reichert"
            />
            <span className="chat-name">Glenna Reichert</span>
            <span className="dot">
              <svg width="26" height="26">
                <circle cx="10" cy="13" r="5" fill="lightgrey" />
              </svg>
            </span>
          </li>
          <li>
            <img
              className="chat-img"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1010.jpeg"
              alt="Clementina DuBu"
            />
            <span className="chat-name">Clementina DuBu</span>
            <span className="dot">
              <svg width="26" height="26">
                <circle cx="10" cy="13" r="5" fill="lightgrey" />
              </svg>
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ChatBox;
