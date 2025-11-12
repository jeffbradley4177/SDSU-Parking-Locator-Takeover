import React, { useState, useMemo, useRef} from "react";


type LotStatus = "Open" | "Busy" | "Full";

type Lot = {
  id: number;
  name: string;
  status: LotStatus;
  lastUpdated: string; // ISO or human string
};


function statusColor(s: LotStatus) {
  if (s === "Open") return "limegreen";
  if (s === "Busy") return "gold";
  return "tomato"; // Full
}

const ParkingLotList: React.FC = () => {


//lot data exists here. We can build the JSON submission from the state values here.
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

const [selectedLotId, setSelectedLotId] = useState<number | null>(null);
const [isDialogOpen, setIsDialogOpen] = useState(false);
const dialogRef = useRef<HTMLDialogElement | null>(null);

  const selectedLot = useMemo(
    () => lots.find(lot => lot.id === selectedLotId) ?? null,
    [lots, selectedLotId]
  );

  const openDialogFor = (id: number) => {
    setSelectedLotId(id);
    setIsDialogOpen(true);
    // show native dialog
    requestAnimationFrame(() => dialogRef.current?.showModal());
  };

   const closeDialog = () => {
    setIsDialogOpen(false);
    dialogRef.current?.close();
  };


//submission here can send information to the server side. It needs to be built out.
  const updateLotStatus = (status: LotStatus) => {
    if (selectedLotId == null) return;
    setLots(prev =>
      prev.map(l => (l.id === selectedLotId ? { ...l, status, lastUpdated: "just now" } : l))
    );
    closeDialog();
  };


   return (
    <>
      <table>
        <tbody>
          {lots.map(lot => (
            <tr
              key={lot.id}
              role="button"
              tabIndex={0}
              onClick={() => openDialogFor(lot.id)}
              onKeyDown={e => (e.key === "Enter" || e.key === " ") && openDialogFor(lot.id)}
              style={{ cursor: "pointer", borderBottom: "1px solid #333" }}
            >
              <td style={{ padding: ".6rem" }}>{lot.name}</td>
              <td style={{ padding: ".6rem", fontWeight: 700 }}>{lot.status}</td>
              <td style={{ padding: ".6rem", opacity: 0.8 }}>{lot.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog ref={dialogRef} onClose={closeDialog} style={{ borderRadius: 12, padding: 16 }}>
        <form method="dialog" style={{ display: "grid", gap: 12 }}>
          <h3 style={{ margin: 0 }}>
            Set status for {selectedLot?.name ?? "Lot"}
          </h3>
          <div style={{ display: "flex", gap: 8 }}>
            <button 
            type="button" 
            style={{color: "green"}} 
            onClick={() => updateLotStatus("Open")}>Open</button>
            <button 
            type="button" 
            style={{color: "yellow"}} 
            onClick={() => updateLotStatus("Busy")}>Busy</button>
            <button 
            type="button" 
            style={{color:"red"}}
            onClick={() => updateLotStatus("Full")}>Full</button>
          </div>
          <button value="cancel" onClick={closeDialog}>Cancel</button>
        </form>
      </dialog>
    </>
  );
}

export default ParkingLotList;