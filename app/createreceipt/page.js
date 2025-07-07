"use client";

import { useState } from "react";
import CreateReceiptModal from "@/components/CreateReceipt/CreateReceiptModal";

export default function CreateReceiptPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container py-5">
      <h2>Create Receipt Page</h2>
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Open Create Receipt Modal
      </button>

      {showModal && <CreateReceiptModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
