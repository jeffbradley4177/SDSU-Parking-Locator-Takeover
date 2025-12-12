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

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080/api";

export async function fetchLots(): Promise<Lot[]> {
  // Using apiClient (standardized on snippet 1's helper)
  return apiClient.get<Lot[]>("/lots");
}

export async function updateLotStatus(id: number, status: LotStatus): Promise<void> {
  return apiClient.post(`/lots/${id}/status`, { status });
}

export async function updateLotOccupied(id: number, occupied: number): Promise<void> {
  // Assuming the backend takes this as a query parameter per snippet 1
  return apiClient.post(`/lots/${id}/occupied?occupied=${occupied}`);
}