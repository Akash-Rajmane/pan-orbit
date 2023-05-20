import React, { useContext } from "react";
import "./profile.css";
import { UserContext } from "../../context/user";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      <div className="item1">
        <div>
          <img src={user.profilepicture} alt={user.name} className="user-img" />
          <p className="username">{user.name}</p>
          <div className="user-details">
            <span className="col1">Username :</span>
            <span className="col2">{user.name}</span>
            <span className="col1">Email :</span>
            <span className="col2">{user.email}</span>
            <span className="col1">Phone :</span>
            <span className="col2">{user.phone}</span>
            <span className="col1">Website :</span>
            <span className="col2">{user.website}</span>
          </div>
        </div>
        <hr className="h-line" />
        <div>
          <p className="title-text">Company</p>
          <div className="company-details">
            <span className="col1">Name :</span>
            <span className="col2">{user.company.name}</span>
            <span className="col1">catchphrase :</span>
            <span className="col2">{user.company.catchPhrase}</span>
            <span className="col1">bs :</span>
            <span className="col2">{user.company.bs}</span>
          </div>
        </div>
      </div>
      <div className="item2">
        <div className="v-line"></div>
        <div className="address-content">
          <p className="address">Address :</p>
          <div className="address-details">
            <span className="col1">Street :</span>
            <span className="col2">{user.address.street}</span>
            <span className="col1">Suite :</span>
            <span className="col2">{user.address.suite}</span>
            <span className="col1">City :</span>
            <span className="col2">{user.address.city}</span>
            <span className="col1">Zipcode :</span>
            <span className="col2">{user.address.zipcode}</span>
          </div>
        </div>
        <div className="map">
          <iframe
            title="map"
            width="550px"
            height="300px"
            src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="co-ordinates">
          <p>
            <span className="geo-text">Lat:</span>
            <span className="geo-co">{user.address.geo.lat}</span>
            <span className="geo-text">Long:</span>
            <span className="geo-co">{user.address.geo.lng}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
