import React, { useState, useEffect, useMemo, useRef } from "react";
import type { Lot, LotStatus } from "@/shared/types";
import { LotStatusBadge } from "./LotStatusBadge";
import { Text } from "@/shared/components/typography";
import { fetchLots, updateLotStatus as apiUpdateLotStatus } from "../../../../shared/api/parking.ts";


export const ParkingLotList = () => {


// Use state to hold the lots, initially an empty array as it will be loaded from the API
  const [lots, setLots] = useState<Lot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

const [selectedLot, setSelectedLot] = useState<number | null>(null);
const [, setIsDialogOpen] = useState(false);
const dialogRef = useRef<HTMLDialogElement | null>(null);

useEffect(() => {
    // This function loads the lot data from the backend
    const loadLots = async () => {
      try {
        setLoading(true);
        // Assuming fetchLots is available and returns Lot[]
        const data = await fetchLots(); 
        setLots(data);
        setError(null); // Clear previous errors on success
      } catch (e: any) {
        // Set an error state if fetching fails
        console.error("Failed to load lots:", e);
        setError(e.message ?? "Failed to load lots");
      } finally {
        setLoading(false);
      }
    };

    loadLots();
  }, []);

  const openDialogFor = (id: number) => {
    setSelectedLot(id);
    setIsDialogOpen(true);
    // show native dialog
    requestAnimationFrame(() => dialogRef.current?.showModal());
  };

   const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedLot(null); // Clear the selected lot when closing
    dialogRef.current?.close();
  };


// submission here can send information to the server side. It needs to be built out.
  const updateLotStatus = async (status: LotStatus) => {
    try {
      // 1. Send the update to the server (from the refactored example)
      await apiUpdateLotStatus(selectedLot.id, status);

      // 2. Update the local state to reflect the change immediately
      setLots(prev =>
        prev.map(l =>
          l.id === selectedLot.id
            ? { ...l, status, lastUpdated: "just now" } // Use "just now" for local UI update
            : l
        )
      );

      // 3. Close the dialog on success
      closeDialog();
    } catch (e: any) {
      // Handle the error and show a user-friendly message
      console.error("Failed to update lot status:", e);
      setError(e.message ?? `Failed to update status for ${selectedLot.name}.`);
    }
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
                <LotStatusBadge status={lot.status} />
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
          <Text as="h3" level="h4" className="m-0">
            Set status for {selectedLot?.name ?? "Lot"}
          </Text>
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