import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import "./header.css";
import { UserContext } from "../../context/user";
import Modal from "../modal/Modal";

const Header = () => {
  let location = useLocation();
  let title = location.pathname.split("/")[1];
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);

  return (
    <header className={"header"}>
      <h3 className={"title"}>{title}</h3>
      <div className="user-data" onClick={() => setShow(true)}>
        <img src={user.profilepicture} alt={user.name} className="circle" />
        <span>{user.name}</span>
      </div>
      {show && <Modal setShow={setShow} />}
    </header>
  );
};

export default Header;
