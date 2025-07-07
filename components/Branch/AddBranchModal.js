"use client";
import { useState } from "react";

export default function AddBranchModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    branchName: "",
    email: "",
    address: "",
    location: "",
    state: "",
    country: "",
    mobile: "",
    city: "",
    pincode: "",
    status: "Active",
    username: "",
    userEmail: "",
    password: "",
    type: "Admin",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: name === "logo" ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBranch = {
      name: `${form.branchName} - (${form.location})`,
      user: form.username,
      role: form.type,
      avatar: form.logo
        ? URL.createObjectURL(form.logo)
        : "https://source.unsplash.com/80x80/?hospital",
    };

    onSave(newBranch);
    onClose();
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Add Branch</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>

            <div className="modal-body">
              <div className="row g-3">
                {[
                  { label: "Branch Name", name: "branchName" },
                  { label: "Branch Location", name: "location" },
                  { label: "Branch E-mail", name: "email" },
                  { label: "Mobile Number", name: "mobile" },
                  { label: "Address", name: "address" },
                  { label: "City", name: "city" },
                  { label: "State", name: "state" },
                  { label: "Pincode", name: "pincode" },
                ].map((field) => (
                  <div key={field.name} className="col-md-6">
                    <input
                      className="form-control"
                      placeholder={field.label}
                      name={field.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                ))}

                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="country"
                    onChange={handleChange}
                    required
                  >
                    <option>Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="status"
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="User Name"
                    name="username"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="User Email"
                    name="userEmail"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Branch Logo</label>
                  <input
                    className="form-control"
                    type="file"
                    name="logo"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select"
                    name="type"
                    onChange={handleChange}
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Super admin">Super admin</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Branch
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
