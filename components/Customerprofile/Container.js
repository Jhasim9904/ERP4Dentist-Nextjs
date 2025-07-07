import React from "react";
import "./Container.css";
import Patient from "./Patient";
import Card from "./Card";
import EMR from "./EMR";

const Container = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      {activeTab === "history" && (
        <div className="card" style={{ width: "78rem", height: "30rem" }}>
          <div className="card-body">
            <div className="heading">
              <div className="d-flex">
                <div className="mx-2">
                  <button
                    className={`tab-button ${
                      activeTab === "history" ? "active-tab" : ""
                    }`}
                    onClick={() => setActiveTab("history")}
                  >
                    History
                  </button>
                </div>
                <div className="mx-2">
                  <button
                    className={`tab-button ${
                      activeTab === "patient" ? "active-tab" : ""
                    }`}
                    onClick={() => setActiveTab("patient")}
                  >
                    Patient
                  </button>
                </div>
                <div className="mx-2">
                  <button
                    className={`tab-button ${
                      activeTab === "emr" ? "active-tab" : ""
                    }`}
                    onClick={() => setActiveTab("emr")}
                  >
                    EMR
                  </button>
                </div>
              </div>

              <div>
                <button className="btn-primary btn">
                  Book Appointment for check
                </button>
              </div>
            </div>

            <Card />
          </div>
        </div>
      )}

      {activeTab === "patient" && (
        <Patient activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      {activeTab === "emr" && (
        <EMR activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
    </div>
  );
};

export default Container;
