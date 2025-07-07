"use client";

import { useState } from "react";
import CreateBillModal from "@/components/CreateBill/CreateBillModal";

export default function CreateBillPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container py-5">
      <h2>Create Bill Page</h2>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Open Create Bill Modal
      </button>

      {showModal && <CreateBillModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
