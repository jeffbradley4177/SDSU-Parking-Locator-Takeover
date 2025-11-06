package edu.sdsu.parking_backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ParkingLotService {

    private static final Logger log = LoggerFactory.getLogger(ParkingLotService.class);

    private final ParkingLotRepo parkingLotRepo;
    private final ReportRepo reportRepo;

    public ParkingLotService(ParkingLotRepo parkingLotRepo,
                             ReportRepo reportRepo,
                             Optional<AnalyticsService> analyticsService) {
        this.parkingLotRepo = parkingLotRepo;
        this.reportRepo = reportRepo;
    }

    public List<ParkingLot> findAll() {
        return parkingLotRepo.findAll();
    }

    public ParkingLot findById(int id) {
        return parkingLotRepo.findById(id).orElse(null);
    }

    /**
     * Update occupied spaces for a lot.
     * Returns true if update succeeded (valid lot and occupancy), false otherwise.
     * Persists the lot and records a snapshot in reportRepo.
     */
    @Transactional
    public boolean updateOccupied(int lotId, int occupied) {
        Optional<ParkingLot> opt = parkingLotRepo.findById(lotId);
        if (opt.isEmpty()) {
            log.warn("updateOccupied: lot {} not found", lotId);
            return false;
        }
        ParkingLot lot = opt.get();

        // Adjust these accessor names if your ParkingLot uses different names
        int capacity = lot.getCapacity();
        if (occupied < 0 || occupied > capacity) {
            log.warn("updateOccupied: invalid occupied {} for lot {} (capacity={})", occupied, lotId, capacity);
            return false;
        }

        lot.setOccupiedSpaces(occupied);
        // set status based on capacity — change to enum or boolean as your model requires
        lot.setCurrentStatus(occupied >= capacity ? "FULL" : "NOT FULL");

        parkingLotRepo.save(lot);

        // record snapshot; adjust Report constructor if your Report fields differ
        try {
            Report r = new Report(lotId, capacity, null);
            reportRepo.save(r);
        } catch (Exception e) {
            log.debug("Could not write report snapshot: {}", e.getMessage());
            // not fatal for the primary update
        }

        log.info("Lot {} updated → occupied={}, capacity={}, status={}", lotId, occupied, capacity, lot.getCurrentStatus());
        return true;
    }
}



