package edu.sdsu.parking_backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import jakarta.persistence.Transient;

@Component
public class Admin extends User {

    private static final Logger log = LoggerFactory.getLogger(Admin.class);

    private String adminID;
    @Transient
    private transient final ParkingLotService parkingLotService;
    private final AnalyticsService analyticsService;

    public Admin(ParkingLotService parkingLotService, AnalyticsService analyticsService) {
        this.parkingLotService = parkingLotService;
        this.analyticsService = analyticsService;
    }

    public void setAdminID(String adminID) {
        this.adminID = adminID;
    }

    public void viewLots() {
        log.info("Admin {} viewing lots…", adminID);
        parkingLotService.findAll().forEach(lot ->
                log.info("Lot {} → {}", lot.getLotID(), lot.getStatus())
        );
    }

    public boolean updateStatus(int lotID, int newOccupied, int newCapacity) {
        if (!isLoggedIn()) {
            log.warn("Admin {} update denied (not logged in)", adminID);
            return false;
        }
        ParkingLot lot = parkingLotService.findById(lotID);
        if (lot == null) {
            log.warn("Admin {} update failed: lot {} not found", adminID, lotID);
            return false;
        }
        // set capacity via setter if available
        try {
            lot.setCapacity(newCapacity);
        } catch (NoSuchMethodError | UnsupportedOperationException ignored) {
            // If ParkingLot doesn't expose setCapacity, you can add one or add a service method to update capacity.
        }

        boolean ok = parkingLotService.updateOccupied(lotID, newOccupied);
        if (ok) log.info("Admin {} updated Lot {} → capacity={}, occupied={}, status={}",
                adminID, lotID, lot.getCapacity(), lot.getOccupiedSpaces(), lot.getStatus());
        return ok;
    }

    public boolean manageUsers(String operation, String targetEmail) {
        if (!isLoggedIn()) {
            log.warn("Admin {} manageUsers denied (not logged in)", adminID);
            return false;
        }
        if (operation == null || targetEmail == null) {
            log.warn("manageUsers invalid args: op={}, email={}", operation, targetEmail);
            return false;
        }

        String op = operation.trim().toUpperCase();

        switch (op) {
            case "DELETE":
                boolean ok = UserService.deleteByEmail(targetEmail);
                if (ok) {
                    log.info("Admin {} deleted user {}", adminID, targetEmail);
                }
                return ok;

            default:
                log.warn("Unsupported manageUsers operation: {}", op);
                return false;
        }
    }

    public Analytics generateUsageReport() {
        if (!isLoggedIn()) {
            log.warn("Admin {} attempted to generate analytics without login", adminID);
            return null;
        }
        Analytics report = analyticsService.genUsageStat(); // <-- use only this method
        log.info("Admin {} generated analytics report id={}", adminID, report == null ? "null" : report.getReportID());
        return report;
    }
}