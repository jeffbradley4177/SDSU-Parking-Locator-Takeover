package edu.sdsu.parking_backend.shared.response;

import edu.sdsu.parking_backend.features.parking.model.ParkingLot;
import edu.sdsu.parking_backend.features.parking.model.Report; // Ensure Report model exists
import lombok.AllArgsConstructor;
import lombok.Data;
import java.util.List;

@Data
@AllArgsConstructor
public class LotDetailsResponse {
    private ParkingLot lot;
    private List<Report> recentReports;
}