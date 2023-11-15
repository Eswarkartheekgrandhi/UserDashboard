import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import "../styles/AccoutCreation.css";
import logo from "../logo.svg";

const AccountCreation = () => {
  return (
    <div className="signUp-container">
      <div className="signUp-form">
        <img className="logo" src={logo} alt="Logo-here" />
        <div className="holder">
          <PersonOutlineOutlinedIcon className="user-icon" />
          <input type="text" placeholder="USERNAME" className="input-field" />
        </div>
        <div className="holder">
          <HttpsOutlinedIcon className="user-icon" />
          <input
            type="password"
            placeholder="PASSWORD"
            className="input-field"
          />
        </div>
        <button className="input-field">Create Account</button>
      </div>
    </div>
  );
};

export default AccountCreation;
