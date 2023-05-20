import React, { useContext } from "react";
import { UserContext } from "../../context/user";
import { useNavigate } from "react-router";
import "./modal.css";

const Modal = ({ setShow }) => {
  const { user } = useContext(UserContext);
  let navigate = useNavigate();

  return (
    <>
      <div className="modal-backdrop" onClick={() => setShow(false)}></div>
      <div className="modal">
        <div className="main-user">
          <img
            src={user.profilepicture}
            alt={user.name}
            className="modal-img"
          />
          <p>{user.name}</p>
          <p className="main-user-email">{user.email}</p>
        </div>
        <hr className="hr-line" />
        <p className="other-users">
          <img
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg"
            alt="Clementine Bauch"
            className="modal-users-img"
          />
          <span className="modal-users-name">Clementine Bauch</span>
        </p>
        <hr className="hr-line" />
        <p className="other-users">
          <img
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg"
            alt="Patricia Lebsack"
            className="modal-users-img"
          />
          <span className="modal-users-name">Patricia Lebsack</span>
        </p>
        <button className="sign-out-btn" onClick={() => navigate("/")}>
          Sign out
        </button>
      </div>
    </>
  );
};

export default Modal;
