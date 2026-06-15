import "../App.css";
import React, { useState, useEffect } from "react";
import Ophthalmology from "./specialistPage/Ophthalmology";
import  { useState, useEffect } from "react";
import React from "react";
import PieChartComponent from "../components/PieChart";
import App from "../components/Barchart"
import Piechart from "./Piechart";
import Barchart from "./Barchart";
import Footer from "./Footer";

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

        <h2 className="company-name">Health Care</h2>

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
          <li><a href="/orthopaedics" className="side">Orthopaedics</a></li>
          <li><a href="/ophthalmology" className="side">Ophthalmology</a></li>
          <li><a href="/neurology" className="side">Neurology</a></li>
          <li><a href="/cardiology" className="side">Cardiology</a></li>
          <li><a href="/pediatrics" className="side">Pediatrics</a></li>
          <li><a href="/medical" className="side">Medical</a></li>
        </ul>
        </div>
        <br />
        <br />
        
          <a href="" className="card-middle">
            BOOK APPOINTMENT
          </a>
        
        <br />
        <br />
  
      <h3>NORMAL HUMAN DETAILS</h3>
    

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


    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f1f3f8",
        minHeight: "100vh",
      }}
    >
      <div 
        style={{
          flex: 1,
          height: "450px",
          border: "1px solid white",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "#0f172a",
        }}
      >
        <Piechart />
      </div>

      <div
        style={{
          flex: 1,
          height: "450px",
          border: "1px solid white",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "#0f172a",
        }}
      >
        <Barchart />
      </div>
    </div>
    <Footer />

    



  
    </>
    
  );
  
}
export default Dashboard;