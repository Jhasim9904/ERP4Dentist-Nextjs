"use client";

import { useState } from "react";
import ObservationModal from "@/components/Observation/ObservationModel";

export default function ObservationPage() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <ObservationModal onClose={() => setShow(false)} />}
      {!show && (
        <button className="btn btn-primary" onClick={() => setShow(true)}>
          Open Observation Modal
        </button>
      )}
    </div>
  );
}
