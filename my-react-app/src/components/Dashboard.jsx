import "../App.css";
import React, { useState, useEffect } from "react";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <h2 className="company-name">My Company</h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        </div>

        <div className="datetime">
          {currentDateTime.toLocaleDateString()}{" "}
          {currentDateTime.toLocaleTimeString()}
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        
        <ul>
          <li><a href="" className="side">Orthopaedics</a></li>
          <li><a href="" className="side">Ophthalmology</a></li>
          <li><a href="" className="side">Neurology</a></li>
          <li><a href="" className="side">Cardiology</a></li>
          <li><a href="" className="side">Pediatrics</a></li>
          <li><a href="" className="side">Medical</a></li>
        </ul>
        </div>
        <br />
        <br />
        <div className="card-middle">
             <a href="" className="card-middle1">BOOK APPOINMENT</a>
        </div>
        <br />

        <div className="dashboard-cards">
  <div className="card">
    <h3>Blood Pressure</h3>
    <p>120/80 mmHg</p>
  </div>

  <div className="card">
    <h3>Heart Rate</h3>
    <p>72 BPM</p>
  </div>

  <div className="card">
    <h3>Oxygen Level</h3>
    <p>98%</p>
  </div>

  <div className="card">
    <h3>Body Temperature</h3>
    <p>36.8°C</p>
  </div>

  <div className="card">
    <h3>Respiration Rate</h3>
    <p>16/min</p>
  </div>

  <div className="card">
    <h3>Blood Sugar</h3>
    <p>95 mg/dL</p>
  </div>
</div>
      
    </>
    
  );
  
}

export default Dashboard;