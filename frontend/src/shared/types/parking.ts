/**
 * Parking lot status types
 */
export type LotStatus = "Open" | "Busy" | "Full" | "Closed";

/**
 * Parking lot data structure
 */
export interface Lot {
  id: number;
  name: string;
  status: LotStatus;
  lastUpdated: string;
}

/**
 * Parking lot location with coordinates
 */
export interface ParkingLotLocation {
  name: string;
  coords: [number, number]; // [latitude, longitude]
}

/**
 * Complete parking lot with location and status
 */
export interface ParkingLotWithLocation extends Lot {
  coords: [number, number];
}
