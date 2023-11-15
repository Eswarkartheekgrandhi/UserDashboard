import React, { useState } from "react";
import TopNavBar from "../components/topNavBar";
import "../styles/UserDetails.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const userData = [
    {
      id: 1,
      userName: "JohnDoe",
      phone: "123-456-7890",
      emailId: "john.doe@example.com",
      creationDate: "2022-01-01",
    },
    {
      id: 2,
      userName: "JaneSmith",
      phone: "987-654-3210",
      emailId: "jane.smith@example.com",
      creationDate: "2022-02-15",
    },
    {
      id: 3,
      userName: "John",
      phone: "123-456",
      emailId: "john@example.com",
      creationDate: "2022-02-01",
    },
    {
      id: 4,
      userName: "Jane",
      phone: "987-654",
      emailId: "smith@example.com",
      creationDate: "2022-01-15",
    },
    {
      id: 5,
      userName: "Doe",
      phone: "123-7890",
      emailId: "doe@example.com",
      creationDate: "2022-01-02",
    },
    {
      id: 6,
      userName: "Smith",
      phone: "654-3210",
      emailId: "smith@example.com",
      creationDate: "2021-02-15",
    },
  ];

  const filteredUserData = userData.filter((user) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TopNavBar />
      <div className="table-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by username..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <br />
        <div className="table-data">
          <div
            className="table-head"
            style={{ color: "#A6A6A6", backgroundColor: "#d6e6f2" }}
          >
            <div style={{ flex: "30%", textAlign: "center" }}>UserName</div>
            <div style={{ flex: "15%", textAlign: "center" }}>Phone</div>
            <div
              style={{ flex: "15%", textAlign: "center", paddingLeft: "1vw" }}
            >
              EmailId
            </div>
            <div style={{ flex: "15%", textAlign: "center" }}>
              Creation Date
            </div>
          </div>
          {/* Render the filtered user data */}
          {filteredUserData.map((user) => (
            <div
              className="table-row"
              key={user.id}
              onClick={() => handleUserClick(user)}
            >
              <div style={{ flex: "30%", textAlign: "center" }}>
                {user.userName}
              </div>
              <div style={{ flex: "15%", textAlign: "center" }}>
                {user.phone}
              </div>
              <div
                style={{ flex: "15%", textAlign: "center", paddingLeft: "1vw" }}
              >
                {user.emailId}
              </div>
              <div style={{ flex: "15%", textAlign: "center" }}>
                {user.creationDate}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal">
            <h2>User Report</h2>
            <p>User: {selectedUser?.userName}</p>
            <p>EmailId: {selectedUser?.emailId}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
