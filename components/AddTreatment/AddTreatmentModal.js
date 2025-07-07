"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./AddTreatmentModal.module.css";

const permanentTeeth = [
  18, 17, 16, 15, 14, 13, 12, 11,
  21, 22, 23, 24, 25, 26, 27, 28,
  48, 47, 46, 45, 44, 43, 42, 41,
  31, 32, 33, 34, 35, 36, 37, 38
];

const deciduousTeeth = [
  55, 54, 53, 52, 51,
  61, 62, 63, 64, 65,
  85, 84, 83, 82, 81,
  71, 72, 73, 74, 75
];

export default function AddTreatmentModal({ onClose }) {
  const [selectedTab, setSelectedTab] = useState("permanent");
  const [selectedTeeth, setSelectedTeeth] = useState([]);

  const handleSelectTooth = (num) => {
    setSelectedTeeth((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  const renderQuadrants = (type) => {
    let q1 = [], q2 = [], q3 = [], q4 = [];

    if (type === "permanent") {
      const list = permanentTeeth;
      q1 = list.slice(0, 8); q2 = list.slice(8, 16);
      q3 = list.slice(16, 24); q4 = list.slice(24, 32);
    } else {
      q1 = deciduousTeeth.slice(0, 5);
      q2 = deciduousTeeth.slice(5, 10);
      q3 = deciduousTeeth.slice(10, 15);
      q4 = deciduousTeeth.slice(15, 20);
    }

    return (
      <div className={styles.toothGridContainer}>
        <div className={styles.cross}></div>
        <div className={styles.quadrantRow}>
          <div className={styles.quadrantBox}>
            {q1.map((num) => (
              <div key={num} className={styles.toothWrapper} onClick={() => handleSelectTooth(num)}>
                <Image
                  src={`/tooth/${type}/${num}.png`}
                  alt={`Tooth ${num}`}
                  width={50}
                  height={50}
                  className={styles.toothImage}
                />
                <div className={styles.toothLabel}>{num}</div>
              </div>
            ))}
          </div>
          <div className={styles.quadrantBox}>
            {q2.map((num) => (
              <div key={num} className={styles.toothWrapper} onClick={() => handleSelectTooth(num)}>
                <Image
                  src={`/tooth/${type}/${num}.png`}
                  alt={`Tooth ${num}`}
                  width={50}
                  height={50}
                  className={styles.toothImage}
                />
                <div className={styles.toothLabel}>{num}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.quadrantRow}>
          <div className={styles.quadrantBox}>
            {q3.map((num) => (
              <div key={num} className={styles.toothWrapper} onClick={() => handleSelectTooth(num)}>
                <Image
                  src={`/tooth/${type}/${num}.png`}
                  alt={`Tooth ${num}`}
                  width={50}
                  height={50}
                  className={styles.toothImage}
                />
                <div className={styles.toothLabel}>{num}</div>
              </div>
            ))}
          </div>
          <div className={styles.quadrantBox}>
            {q4.map((num) => (
              <div key={num} className={styles.toothWrapper} onClick={() => handleSelectTooth(num)}>
                <Image
                  src={`/tooth/${type}/${num}.png`}
                  alt={`Tooth ${num}`}
                  width={50}
                  height={50}
                  className={styles.toothImage}
                />
                <div className={styles.toothLabel}>{num}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="modal show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Plan</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <input type="date" className="form-control" />
            </div>

            <div className="mb-3">
              <select className="form-select">
                <option>Please Select Doctor</option>
                <option>Dr. Smith</option>
                <option>Dr. Lisa</option>
              </select>
            </div>

            {/* Tooth Selector */}
            <ul className="nav nav-tabs mb-3">
              <li className="nav-item">
                <button
                  className={`nav-link ${selectedTab === "permanent" ? "active" : ""}`}
                  onClick={() => setSelectedTab("permanent")}
                >
                  Permanent
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${selectedTab === "deciduous" ? "active" : ""}`}
                  onClick={() => setSelectedTab("deciduous")}
                >
                  Deciduous
                </button>
              </li>
            </ul>

            {renderQuadrants(selectedTab)}

            <div className="mt-3">
              <strong>Selected:</strong> {selectedTeeth.join(", ") || "None"}
            </div>

            {/* Form Fields */}
            <div className="mt-4">
              <label className="form-label">Procedure</label>
              <select className="form-select mb-3">
                <option>Select Procedure</option>
                <option>Filling</option>
                <option>Extraction</option>
              </select>

              <label className="form-label">Type</label>
              <select className="form-select mb-3">
                <option>Select Type</option>
                <option>Basic</option>
                <option>Advanced</option>
              </select>

              <label className="form-label">Number of Teeth / Units*</label>
              <input type="number" className="form-control mb-3" defaultValue={selectedTeeth.length} />

              <label className="form-label">Original Price</label>
              <input type="number" className="form-control mb-3" />

              <label className="form-label">New Price</label>
              <input type="number" className="form-control mb-3" defaultValue={0} />

              <label className="form-label">Discount</label>
              <input type="number" className="form-control mb-3" defaultValue={0} />
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
