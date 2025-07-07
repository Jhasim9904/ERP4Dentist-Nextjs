//Appointments/EMR/Observation/AddTreatment Pop Up same for Observation/Edit button pop up in side

"use client";
import { useState } from "react";
import AddTreatmentModal from "@/components/AddTreatment/AddTreatmentModal";

export default function AddTreatmentPage() {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container py-4">
      <h1>Add Treatment</h1>
      <button className="btn btn-primary" onClick={handleOpen}>
        + Add Treatment
      </button>

      {showModal && <AddTreatmentModal onClose={handleClose} />}
    </div>
  );
}
