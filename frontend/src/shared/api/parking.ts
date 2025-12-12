import { apiClient } from "./client";
export type LotStatus = "Open" | "Busy" | "Full";

export interface Lot {
  id: number;
  name: string;
  status: LotStatus;
  lastUpdated: string;
  totalSpots?: number;
  occupiedSpots?: number;
}

interface BackendLot {
  lotID: number;
  lotName: string;
  currentStatus: string;
  lastUpdated: string;
  capacity: number;
  occupiedSpaces: number;
  status: string;
}

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080/api";

function mapBackendStatusToLotStatus(status: string): LotStatus {
  if (!status) return "Open";
  const norm = status.toUpperCase();
  if (norm === "FULL") return "Full";
  if (norm === "BUSY") return "Busy";
  return "Open";
}

function mapBackendLot(lot: BackendLot): Lot {
  return {
    id: lot.lotID,
    name: lot.lotName,
    status: mapBackendStatusToLotStatus(lot.currentStatus || lot.status),
    lastUpdated: lot.lastUpdated,
    totalSpots: lot.capacity,
    occupiedSpots: lot.occupiedSpaces,
  };
}

export async function fetchLots(): Promise<Lot[]> {
  // We type the GET request as BackendLot[] to ensure mapping is safe
  const backendLots = await apiClient.get<BackendLot[]>("/lots");
  return backendLots.map(mapBackendLot);
}

export async function updateLotStatus(id: number, status: LotStatus): Promise<void> {
  return apiClient.post(`/lots/${id}/status`, { status });
}

export async function updateLotOccupied(id: number, occupied: number): Promise<void> {
  // Assuming the backend takes this as a query parameter per snippet 1
  return apiClient.post(`/lots/${id}/occupied?occupied=${occupied}`);
}

export async function submitReport(lotId: number, status: LotStatus): Promise<void> {
  await apiClient.post("/reports", {
    lotId,
    statusReported: status,
    userId: 1, // TODO: replace with real logged-in user
  });
}

export interface LotDetails {
  lot: Lot;
  recentReports: Array<{
    id: number;
    statusReported: string;
    timeStamp: string;
  }>;
}

export async function getLotDetails(id: number): Promise<LotDetails> {
  return apiClient.get(`/lots/${id}/details`);
}
