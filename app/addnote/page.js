//Appointments/EMR/Treatment/Action/AddNote (above our addlabwork comp)

"use client";

import { useState } from "react";
import AddNoteModal from "@/components/AddNote/AddNoteModal";

export default function AddNotePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container py-5">
      <h2>Add Note Page</h2>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Open Add Note Modal
      </button>

      {showModal && <AddNoteModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
