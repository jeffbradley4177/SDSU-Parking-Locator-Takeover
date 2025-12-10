import type { ParkingLotLocation } from "@/shared/types";

/**
 * SDSU parking lot locations with coordinates
 * Coordinates are in [latitude, longitude] format
 */

// List needs to be moved to DB in future for dynamic updates
export const PARKING_LOT_LOCATIONS: ParkingLotLocation[] = [
  { name: "Lot 1", coords: [32.775589224360395, -117.06729043855833] },
  { name: "Lot 2", coords: [32.77385611119684, -117.067516019541] },
  { name: "Lot 2A", coords: [32.77322444882351, -117.06843821014218] },
  { name: "Lot 2B", coords: [32.7731759863225, -117.06667432333245] },
  { name: "Lot 2C", coords: [32.773406066352905, -117.06593162206578] },
  { name: "Lot 3", coords: [32.77237566520836, -117.06635059389826] },
  { name: "Lot 4", coords: [32.77133200952377, -117.06640484024716] },
  { name: "Lot 6", coords: [32.77212717792302, -117.07414125713026] },
  { name: "Lot 7", coords: [32.77253029582839, -117.0767388497864] },
  { name: "Lot 10", coords: [32.77445333160164, -117.08007795542854] },
  { name: "Lot 11", coords: [32.77658226408181, -117.07644514625697] },
  { name: "Lot 12", coords: [32.77566789229997, -117.07472220721148] },
  { name: "Lot 14", coords: [32.77791592596343, -117.07419328797026] },
  { name: "Lot 15", coords: [32.778358477123426, -117.07535470498702] },
  { name: "Lot 17", coords: [32.778195694703015, -117.06427608549815] },
  { name: "Lot 17A", coords: [32.777381409564036, -117.06586808012935] },
  { name: "Lot 17B", coords: [32.777575773075775, -117.06644326494417] },
];

/**
 * Get parking lot location by name
 */
export function getParkingLotLocation(name: string): ParkingLotLocation | undefined {
  return PARKING_LOT_LOCATIONS.find(lot => lot.name === name);
}

/**
 * Get all parking lot names
 */
export function getParkingLotNames(): string[] {
  return PARKING_LOT_LOCATIONS.map(lot => lot.name);
}
