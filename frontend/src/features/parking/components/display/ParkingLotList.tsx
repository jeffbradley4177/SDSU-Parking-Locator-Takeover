import { useState, useMemo, useRef } from "react";
import { cn } from "@/lib/cn";
import type { Lot, LotStatus } from "@/shared/types";

export const ParkingLotList = () => {


// lot data exists here. We can build the JSON submission from the state values here.
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
const [, setIsDialogOpen] = useState(false);
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


// submission here can send information to the server side. It needs to be built out.
  const updateLotStatus = (status: LotStatus) => {
    if (selectedLotId == null) return;
    setLots(prev =>
      prev.map(l => (l.id === selectedLotId ? { ...l, status, lastUpdated: "just now" } : l))
    );
    closeDialog();
  };


  return (
    <>
      <table className="w-full">
        <tbody>
          {lots.map(lot => (
            <tr
              key={lot.id}
              role="button"
              tabIndex={0}
              onClick={() => openDialogFor(lot.id)}
              onKeyDown={e => (e.key === "Enter" || e.key === " ") && openDialogFor(lot.id)}
              className="cursor-pointer border-b border-[var(--component-table-border-color)]"
            >
              <td className="p-[var(--component-table-cell-padding)]">{lot.name}</td>
              <td className="p-[var(--component-table-cell-padding)] font-[var(--component-table-text-weight-bold)]">
                {lot.status}
              </td>
              <td className="p-[var(--component-table-cell-padding)] opacity-80">{lot.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog
        ref={dialogRef}
        onClose={closeDialog}
        className="rounded-[var(--component-dialog-radius)] p-[var(--component-dialog-padding)]"
      >
        <form method="dialog" className="grid gap-[var(--component-dialog-gap)]">
          <h3 className="m-0 text-[length:var(--component-dialog-heading-size)] font-[var(--component-dialog-heading-weight)]">
            Set status for {selectedLot?.name ?? "Lot"}
          </h3>
          <div className="flex gap-[var(--component-dialog-gap)]">
            <button
              type="button"
              className="text-[var(--component-dialog-button-success)]"
              onClick={() => updateLotStatus("Open")}
            >
              Open
            </button>
            <button
              type="button"
              className="text-[var(--component-dialog-button-warning)]"
              onClick={() => updateLotStatus("Busy")}
            >
              Busy
            </button>
            <button
              type="button"
              className="text-[var(--component-dialog-button-error)]"
              onClick={() => updateLotStatus("Full")}
            >
              Full
            </button>
          </div>
          <button value="cancel" onClick={closeDialog}>
            Cancel
          </button>
        </form>
      </dialog>
    </>
  );
};