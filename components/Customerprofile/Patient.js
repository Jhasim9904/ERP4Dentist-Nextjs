import React, { useState } from "react";
import "./Patient.css";

const Patient = ({ activeTab, setActiveTab }) => {
  const [formData, setFormData] = useState({
    regDate: "",
    refer: "",
    title: "",
    firstName: "",
    dob: "",
    age: "",
    gender: "",
    nationality: "",
    countryCode: "",
    mobile: "",
    profession: "",
    maritalStatus: "",
    localAddress: ["", "", "", "", ""],
    permanentAddress: ["", "", "", "", ""],
  });

  const [sameAddress, setSameAddress] = useState(true);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddressChange = (type, index, value) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev[type].map((item, i) => (i === index ? value : item)),
    }));
  };

  const [medicalInfo, setMedicalInfo] = useState({
    bloodPressure: false,
    diabetes: false,
    acidityUlcer: true,
    thyroid: false,
    heartProblem: false,
    asthma: false,
    kidneyDisease: false,
    epilepsy: false,
  });

  const [forWomen, setForWomen] = useState({
    pregnant: false,
    birthControl: false,
    others: "",
  });

  const [medications, setMedications] = useState({
    onMeds: false,
    allergic: false,
  });

  const [dental, setDental] = useState({
    smoke: true,
    floss: false,
    brushing: "0",
  });

  const handleToggle = (group, field) => {
    if (group === "medical") {
      setMedicalInfo({ ...medicalInfo, [field]: !medicalInfo[field] });
    } else if (group === "women") {
      setForWomen({ ...forWomen, [field]: !forWomen[field] });
    } else if (group === "medications") {
      setMedications({ ...medications, [field]: !medications[field] });
    } else if (group === "dental") {
      setDental({ ...dental, [field]: !dental[field] });
    }
  };

  return (
    <div className="card" style={{ width: "78rem", minHeight: "100vh" }}>
      <div className="card-body">
        {/* Tabs */}
        <div className="heading d-flex justify-content-between mb-4">
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

        {/* Patient Info */}
        <div className="patient-form">
          <h2 className="form-heading text-center">Patient Info</h2>

          <div className="form-row">
            <div className="form-group">
              <label>Reg. Date</label>
              <input
                type="date"
                value={formData.regDate}
                onChange={(e) => handleChange("regDate", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Refer</label>
              <input
                type="text"
                value={formData.refer}
                onChange={(e) => handleChange("refer", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Title</label>
              <select
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
              >
                <option value="">Select</option>
                <option>Mr</option>
                <option>Ms</option>
              </select>
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>D.O.B</label>
              <input
                type="date"
                value={formData.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => handleChange("age", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>Nationality</label>
              <input
                type="text"
                value={formData.nationality}
                onChange={(e) => handleChange("nationality", e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Country Code</label>
              <input
                type="text"
                value={formData.countryCode}
                onChange={(e) => handleChange("countryCode", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mobile</label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Profession</label>
              <input
                type="text"
                value={formData.profession}
                onChange={(e) => handleChange("profession", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Marital Status</label>
              <select
                value={formData.maritalStatus}
                onChange={(e) => handleChange("maritalStatus", e.target.value)}
              >
                <option value="">Select</option>
                <option>Married</option>
                <option>Single</option>
              </select>
            </div>
          </div>

          {/* Address Section */}
          <div className="address-section">
            <div>
              <h4>Local Address</h4>
              {formData.localAddress.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={val}
                  onChange={(e) =>
                    handleAddressChange("localAddress", i, e.target.value)
                  }
                  className="address-input"
                />
              ))}
            </div>
            <div>
              <div className="address-header">
                <h4>Permanent Address</h4>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={sameAddress}
                    onChange={() => setSameAddress(!sameAddress)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              {formData.permanentAddress.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={val}
                  onChange={(e) =>
                    handleAddressChange("permanentAddress", i, e.target.value)
                  }
                  className="address-input"
                />
              ))}
            </div>
          </div>

          {/* Medical Info */}
          <h3 className="section-heading">Medical Info</h3>
          <div className="toggle-grid">
            {Object.keys(medicalInfo).map((key) => (
              <div key={key} className="toggle-option">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={medicalInfo[key]}
                    onChange={() => handleToggle("medical", key)}
                  />
                  <span className="slider"></span>
                </label>
                <span className="toggle-label">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </span>
              </div>
            ))}
          </div>

          <hr />

          {/* For Women */}
          <h3 className="section-heading">For Women Only</h3>
          <div className="toggle-grid">
            {["pregnant", "birthControl"].map((key) => (
              <div key={key} className="toggle-option">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={forWomen[key]}
                    onChange={() => handleToggle("women", key)}
                  />
                  <span className="slider"></span>
                </label>
                <span className="toggle-label">
                  {key === "birthControl"
                    ? "Using birth control pills?"
                    : "Pregnant"}
                </span>
              </div>
            ))}
          </div>
          <input
            className="address-input"
            type="text"
            placeholder="Others"
            value={forWomen.others}
            onChange={(e) =>
              setForWomen({ ...forWomen, others: e.target.value })
            }
          />

          <hr />

          {/* Medications */}
          <h3 className="section-heading">Medications</h3>
          <div className="toggle-grid">
            <div className="toggle-option">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={medications.onMeds}
                  onChange={() => handleToggle("medications", "onMeds")}
                />
                <span className="slider"></span>
              </label>
              <span className="toggle-label">
                Presently under any medications?
              </span>
            </div>
            <div className="toggle-option">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={medications.allergic}
                  onChange={() => handleToggle("medications", "allergic")}
                />
                <span className="slider"></span>
              </label>
              <span className="toggle-label">Allergic to any medications?</span>
            </div>
          </div>

          <hr />
          {/* Dental History */}
          <h3 className="section-heading">Dental History</h3>
          <div className="toggle-grid">
            <div className="toggle-option">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={dental.smoke}
                  onChange={() => handleToggle("dental", "smoke")}
                />
                <span className="slider"></span>
              </label>
              <span className="toggle-label">Smoke or Chew tobacco?</span>
            </div>
            <div className="toggle-option">
              <label className="toggle-label">
                No of times brushing per day?
              </label>
              <select
                value={dental.brushing}
                onChange={(e) =>
                  setDental({ ...dental, brushing: e.target.value })
                }
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div className="toggle-option">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={dental.floss}
                  onChange={() => handleToggle("dental", "floss")}
                />
                <span className="slider"></span>
              </label>
              <span className="toggle-label">Use floss?</span>
            </div>
          </div>

          <div className="form-footer text-center mt-4">
            <button className="btn-submit">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
