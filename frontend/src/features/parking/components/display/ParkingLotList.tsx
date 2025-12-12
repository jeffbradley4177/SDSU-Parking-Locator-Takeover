import React, { useState, useEffect, useRef } from "react";
import type { Lot, LotStatus } from "@/shared/types";
import { LotStatusBadge } from "./LotStatusBadge";
import { Text } from "@/shared/components/typography";
import { fetchLots, updateLotStatus as apiUpdateLotStatus } from "@/shared/api/parking";

export const ParkingLotList = () => {
  const [lots, setLots] = useState<Lot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Store the whole Lot object so we can access .name and .id easily
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // Reusable fetch function
  const loadLots = async () => {
    try {
      setLoading(true);
      const data = await fetchLots();
      setLots(data);
      setError(null);
    } catch (e: any) {
      console.error("Failed to load lots:", e);
      setError(e.message ?? "Failed to load parking data. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLots();
  }, []);

  const openDialogFor = (lot: Lot) => {
    setSelectedLot(lot);
    requestAnimationFrame(() => dialogRef.current?.showModal());
  };

  const closeDialog = () => {
    setSelectedLot(null);
    dialogRef.current?.close();
  };

  const handleUpdateStatus = async (status: LotStatus) => {
    if (!selectedLot) return;

    try {
      // 1. Send update to server
      await apiUpdateLotStatus(selectedLot.id, status);
      
      // 2. Refresh data from server to ensure UI matches database exactly
      const updatedData = await fetchLots();
      setLots(updatedData);
      
      closeDialog();
    } catch (e: any) {
      console.error("Failed to update lot status:", e);
      setError(e.message ?? `Failed to update status for ${selectedLot.name}.`);
      closeDialog(); // Optional: close dialog even on error, or keep open to retry
    }
  };

  // --- Conditional Rendering for States ---

  if (loading && lots.length === 0) {
    return (
      <div className="p-8 text-center">
        <Text>Loading parking lots...</Text>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center border border-red-500 rounded-lg bg-red-50">
        <Text className="text-red-600 mb-4">{error}</Text>
        <button 
          onClick={loadLots}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  return (
    <>
      <table className="w-full">
        <tbody>
          {lots.map(lot => (
            <tr
              key={lot.id}
              role="button"
              tabIndex={0}
              onClick={() => openDialogFor(lot)}
              onKeyDown={e => (e.key === "Enter" || e.key === " ") && openDialogFor(lot)}
              className="cursor-pointer border-b border-[var(--component-table-border-color)] hover:bg-black/5"
            >
              <td className="p-[var(--component-table-cell-padding)]">{lot.name}</td>
              <td className="p-[var(--component-table-cell-padding)] font-bold">
                <LotStatusBadge status={lot.status} />
              </td>
              <td className="p-[var(--component-table-cell-padding)] opacity-80 text-sm">
                Updated: {lot.lastUpdated}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog
        ref={dialogRef}
        onClose={closeDialog}
        className="rounded-[var(--component-dialog-radius)] p-[var(--component-dialog-padding)] backdrop:bg-black/50"
      >
        <form method="dialog" className="grid gap-[var(--component-dialog-gap)]">
          <Text as="h3" level="h4" className="m-0">
            Set status for {selectedLot?.name}
          </Text>
          
          <div className="flex gap-4">
            <button
              type="button"
              className="px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-50"
              onClick={() => handleUpdateStatus("Open")}
            >
              Open
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded border border-orange-600 text-orange-600 hover:bg-orange-50"
              onClick={() => handleUpdateStatus("Busy")}
            >
              Busy
            </button>

            <button
              type="button"
              className="px-4 py-2 rounded border border-red-600 text-red-600 hover:bg-red-50"
              onClick={() => handleUpdateStatus("Full")}
            >
              Full
            </button>
          </div>
          
          <button 
            type="button" 
            className="mt-2 text-gray-500 underline" 
            onClick={closeDialog}
          >
            Cancel
          </button>
        </form>
      </dialog>
    </>
  );
};