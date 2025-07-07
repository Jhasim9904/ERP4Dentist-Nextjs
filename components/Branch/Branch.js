"use client";

import { useEffect, useState } from "react";
import BranchCard from "./BranchCard";
import AddBranchModal from "./AddBranchModal";

export default function Branch() {
  const defaultBranches = [
    {
      name: "newmedical - (Teynampet)",
      user: "sinnamuthu",
      role: "Super admin",
      avatar: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "newmedical - (Teynampet)",
      user: "Jasmine",
      role: "User",
      avatar: "https://plus.unsplash.com/premium_photo-1698421947098-d68176a8f5b2?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "ZZZ Dental - (Anna Salai)",
      user: "Rose",
      role: "Admin",
      avatar: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Life Line - (chrompet)",
      user: "karthi",
      role: "Admin",
      avatar: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?q=80&w=720&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "New Born - (chrompet)",
      user: "rajesh",
      role: "Admin",
      avatar: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const [branches, setBranches] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("branches"));
  const version = localStorage.getItem("branches_version");

  if (!stored || version !== "v2") {
    localStorage.setItem("branches", JSON.stringify(defaultBranches));
    localStorage.setItem("branches_version", "v2"); // 👈 update version when you change defaultBranches
    setBranches(defaultBranches);
  } else {
    setBranches(stored);
  }
}, []);


  const handleAddBranch = (branch) => {
    const updated = [...branches, branch];
    setBranches(updated);
    localStorage.setItem("branches", JSON.stringify(updated));
  };

  const handleDeleteBranch = (indexToDelete) => {
  if (window.confirm("Are you sure you want to delete this branch?")) {
    const updated = branches.filter((_, i) => i !== indexToDelete);
    setBranches(updated);
    localStorage.setItem("branches", JSON.stringify(updated));
  }
};


  return (
    <div className="container-fluid py-1">
      {/* Header Row */}
      <div className="row mb-4 bg-white px-3 py-3">
        <div className="col-xl-6 mb-3 mb-xl-0">
          <div className="card custom-card shadow-sm">
            <div className="card-body d-flex align-items-center gap-3">
              <img
                src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
                alt="avatar"
                className="rounded-circle"
                width="60"
                height="60"
              />
              <div className="flex-grow-1">
                <h6 className="mb-0 fw-bold">newmedical - (Teynampet)</h6>
                <small className="text-primary">sinnamuthu - (Super Admin)</small>
              </div>
              <span className="badge bg-success fs-6">Super admin</span>
            </div>
          </div>
        </div>

        <div className="col-xl-6 d-flex justify-content-end align-items-start flex-wrap gap-2 mt-4">
          <select className="form-select w-auto">
            <option>Select City</option>
            <option>All</option>
            <option>Chennai</option>
            <option>Puducherry</option>
          </select>
          <select className="form-select w-auto">
            <option>Select Branch</option>
          </select>
          <button className="btn btn-info text-white">Search</button>
          <button className="btn btn-warning" onClick={() => setShowModal(true)}>
            Add Branch
          </button>
        </div>
      </div>

      {/* Branch Cards */}
      {/* Branch Cards */}
<div className="tab-content">
  <div className="tab-pane show active p-0 border-0">
    <div className="row g-3">
      {branches.map((branch, index) => (
        <div key={index} className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <BranchCard {...branch} onDelete={() => handleDeleteBranch(index)} />
        </div>
      ))}
    </div>
  </div>
</div>


      {showModal && (
        <AddBranchModal onClose={() => setShowModal(false)} onSave={handleAddBranch} />
      )}
    </div>
  );
}
