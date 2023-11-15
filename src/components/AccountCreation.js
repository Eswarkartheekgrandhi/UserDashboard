import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import "../styles/AccoutCreation.css";
import logo from "../logo.svg";
import { auth, createUserWithEmailAndPassword } from "../firebase";

const AccountCreation = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        `${username}@gmail.com`,
        password
      );

      console.log("Account created:", userCredential.user);
    } catch (error) {
      console.error("Error creating account:", error.message);
    }
  };

  return (
    <div className="signUp-container">
      <div className="signUp-form">
        <img className="logo" src={logo} alt="Logo-here" />
        <div className="holder">
          <PersonOutlineOutlinedIcon className="user-icon" />
          <input
            type="text"
            placeholder="USERNAME"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="holder">
          <HttpsOutlinedIcon className="user-icon" />
          <input
            type="password"
            placeholder="PASSWORD"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="input-field" onClick={handleCreateAccount}>
          Create Account
        </button>
      </div>
    </div>
  );
};

export default AccountCreation;
