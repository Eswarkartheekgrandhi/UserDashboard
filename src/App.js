import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountCreation from "../src/components/AccountCreation";
import UserDetails from "../src/components/UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/account" element={<AccountCreation />} />
        <Route path="/user" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
