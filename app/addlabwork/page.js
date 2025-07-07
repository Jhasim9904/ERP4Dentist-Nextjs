//Appointments/EMR/Treatment/Action/AddLabWork Pop Up same as LabWorks/Actions/Edit

"use client";
import { useState } from "react";
import AddLabWorkModal from "@/components/AddLabWork/AddLabWorkModal";

export default function AddLabWorkPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container py-5">
      <h2>Add Lab Work</h2>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      {showModal && <AddLabWorkModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
