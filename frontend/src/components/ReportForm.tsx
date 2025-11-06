import React, { useState } from "react";

const lots = ["Parking Structure 1", "Parking Structure 2", "Lot 10", "Lot 7"];
const statuses = ["Open", "Busy", "Full"] as const;
type Status = typeof statuses[number];

const ReportForm: React.FC = () => {
  const [lot, setLot] = useState("");
  const [status, setStatus] = useState<Status | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lot || !status) {
      alert("Please choose a lot and a status.");
      return;
    }
    // For now we just confirm — later this will POST to the backend.
    alert(`Report submitted: ${lot} is ${status}`);
    setLot("");
    setStatus("");
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ marginBottom: ".5rem" }}>Report Parking Status</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.75rem", maxWidth: 420 }}>
        <label style={{ display: "grid", gap: ".25rem" }}>
          <span>Parking Lot</span>
          <select value={lot} onChange={(e) => setLot(e.target.value)}>
            <option value="">-- Choose Lot --</option>
            {lots.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </label>

        <label style={{ display: "grid", gap: ".25rem" }}>
          <span>Status</span>
          <select value={status} onChange={(e) => setStatus(e.target.value as Status)}>
            <option value="">-- Select Status --</option>
            {statuses.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        <button type="submit" style={{ padding: ".5rem .75rem", fontWeight: 600 }}>
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
