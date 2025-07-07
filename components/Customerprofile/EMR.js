import React, { useState } from "react";
import "./EMR.css";
import Examination from "./EMR components/Examination";

const tabs = [
  { id: "examination", label: "Examination", icon: "🩺" },
  { id: "observation", label: "Observation", icon: "🔬" },
  { id: "treatment", label: "Treatment", icon: "🩹" },
  { id: "clinical-notes", label: "Clinical Notes", icon: "📋" },
  { id: "prescriptions", label: "Prescriptions", icon: "📝" },
  { id: "lab-works", label: "Lab Works", icon: "🔬" },
  { id: "uploads", label: "Uploads", icon: "⬆️" },
  { id: "billing", label: "Billing", icon: "🧾" },
  { id: "invoice", label: "Invoice", icon: "📄" },
];

const EMR = ({ activeTab, setActiveTab }) => {
  const [activeTab1, setActiveTab1] = useState("examination");
  return (
    <div>
      <div className="card" style={{ width: "78rem", minHeight: "100vh" }}>
        <div className="card-body">
          <div className="heading d-flex justify-content-between">
            <div className="d-flex">
              {["history", "patient", "emr"].map((tab) => (
                <div className="mx-2" key={tab}>
                  <button
                    className={`tab-button ${
                      activeTab === tab ? "active-tab" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                </div>
              ))}
            </div>
            <div>
              <button
                className="sidebar-btn"
                style={{ backgroundColor: "#007bff", color: "white" }}
              >
                Book Appointment for check
              </button>
            </div>
          </div>

          {/* Patient Form Content */}
          <div className="top-tabs" style={{ marginLeft: "60px" }}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-item ${activeTab1 === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab1(tab.id)}
                style={{ margin: "0px 5px" }}
              >
                <div className="tab-icon">{tab.icon}</div>
                <div className="tab-label">{tab.label}</div>
              </div>
            ))}
          </div>
          <Examination />
        </div>
      </div>
    </div>
  );
};

export default EMR;
