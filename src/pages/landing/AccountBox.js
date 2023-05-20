import React, { useContext } from "react";
import "./acc.css";
import useFetch from "../../hooks/useFetch/useFetch";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/user";

const AccountBox = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useFetch("https://panorbit.in/api/users.json");
  const { setUser } = useContext(UserContext);

  return (
    <div className="acc-box">
      <div className="acc-header">
        <p className="acc-header-text">Select an account</p>
      </div>
      <ul className="list">
        {isLoading ? (
          <>...Loading</>
        ) : (
          data.map((el) => {
            const { id, profilepicture, name } = el;
            return (
              <li
                key={id}
                onClick={() => {
                  setUser(el);
                  navigate(`/profile/${name}`);
                }}
              >
                <img src={profilepicture} alt={name} className="profile-pic" />
                <span className="list-username">{el.name}</span>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default AccountBox;
