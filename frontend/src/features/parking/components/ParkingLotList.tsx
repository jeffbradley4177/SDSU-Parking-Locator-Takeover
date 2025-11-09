import React, { useState } from "react";

type Status = "Open" | "Busy" | "Full";

type Lot = {
  id: number;
  name: string;
  status: Status;
  lastUpdated: string; // ISO or human string
};


function statusColor(s: Status) {
  if (s === "Open") return "limegreen";
  if (s === "Busy") return "gold";
  return "tomato"; // Full
}

const ParkingLotList: React.FC = () => {

const [lots, setLots] = useState<Lot[]>([
  { id: 1, name: "Lot 1", status: "Open", lastUpdated: "5 min ago" },
  { id: 2, name: "Lot 2", status: "Busy", lastUpdated: "12 min ago" },
  { id: 3, name: "Lot 2A", status: "Busy", lastUpdated: "12 min ago" },
  { id: 4, name: "Lot 2B", status: "Busy", lastUpdated: "12 min ago" },
  { id: 5, name: "Lot 2C", status: "Busy", lastUpdated: "12 min ago" },
  { id: 6, name: "Lot 3", status: "Busy", lastUpdated: "12 min ago" },
  { id: 7, name: "Lot 4", status: "Busy", lastUpdated: "12 min ago" },
  { id: 8, name: "Lot 6", status: "Busy", lastUpdated: "12 min ago" },
  { id: 9, name: "Lot 7", status: "Busy", lastUpdated: "12 min ago" },
  { id: 10, name: "Lot 10", status: "Busy", lastUpdated: "12 min ago" },
  { id: 11, name: "Lot 11", status: "Busy", lastUpdated: "12 min ago" },
  { id: 12, name: "Lot 12", status: "Busy", lastUpdated: "12 min ago" },
  { id: 13, name: "Lot 14", status: "Busy", lastUpdated: "12 min ago" },
  { id: 14, name: "Lot 15", status: "Busy", lastUpdated: "12 min ago" },
  { id: 15, name: "Lot 17", status: "Busy", lastUpdated: "12 min ago" },
  { id: 16, name: "Lot 17A", status: "Busy", lastUpdated: "12 min ago" },
  { id: 17, name: "Lot 17B", status: "Busy", lastUpdated: "12 min ago" },
]);


  return (
    <div style={{ marginTop: "1.5rem" }}>
      <h2 style={{ marginBottom: ".5rem" }}>Current Parking Status</h2>
      <div style={{ fontSize: ".9rem", opacity: 0.8, marginBottom: "1rem" }}>
        Status reflects recent user/admin reports.
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #444" }}>
            <th style={{ padding: ".5rem" }}>Lot Name</th>
            <th style={{ padding: ".5rem" }}>Status</th>
            <th style={{ padding: ".5rem" }}>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {lots.map((lot) => (
            <tr key={lot.id} style={{ borderBottom: "1px solid #333" }}>
              <td style={{ padding: ".6rem" }}>{lot.name}</td>
              <td style={{ padding: ".6rem", fontWeight: 700, color: statusColor(lot.status) }}>
                {lot.status}
              </td>
              <td style={{ padding: ".6rem", opacity: 0.8 }}>{lot.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParkingLotList;