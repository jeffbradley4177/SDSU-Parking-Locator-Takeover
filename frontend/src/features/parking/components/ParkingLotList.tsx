import React from "react";

type Status = "Open" | "Busy" | "Full";

type Lot = {
  id: number;
  name: string;
  status: Status;
  lastUpdated: string; // ISO or human string
};

const mockLots: Lot[] = [
  { id: 1, name: "Parking Structure 1", status: "Open", lastUpdated: "5 min ago" },
  { id: 2, name: "Parking Structure 2", status: "Busy", lastUpdated: "12 min ago" },
  { id: 3, name: "Lot 10", status: "Full", lastUpdated: "2 min ago" },
  { id: 4, name: "Lot 7", status: "Open", lastUpdated: "8 min ago" },
];

function statusColor(s: Status) {
  if (s === "Open") return "limegreen";
  if (s === "Busy") return "gold";
  return "tomato"; // Full
}

const ParkingLotList: React.FC = () => {
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
          {mockLots.map((lot) => (
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
