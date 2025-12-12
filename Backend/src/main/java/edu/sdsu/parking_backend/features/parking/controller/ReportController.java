package edu.sdsu.parking_backend.features.parking.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.Map;

import edu.sdsu.parking_backend.features.parking.model.ParkingLot;
import edu.sdsu.parking_backend.features.parking.model.Report;
import edu.sdsu.parking_backend.features.parking.repository.ParkingLotRepository;
import edu.sdsu.parking_backend.features.parking.repository.ReportRepository;
import edu.sdsu.parking_backend.shared.request.ReportRequest;

@RestController         // handle web req
@RequestMapping("/api") // every endpoint url start with "/api"
@CrossOrigin(origins = "http://localhost:5173")

public class ReportController {

    private final ReportRepository reportRepository;
    private final ParkingLotRepository parkingLotRepository;

    public ReportController(ReportRepository reportRepository,
                            ParkingLotRepository parkingLotRepository) {
        this.reportRepository = reportRepository;
        this.parkingLotRepository = parkingLotRepository;
    }

    @PostMapping("/reports")
    public ResponseEntity<?> submitReport(@RequestBody ReportRequest request) {
        //Find lot
        var lotOpt = parkingLotRepository.findById(request.lotId());
        if (lotOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Lot not found"));
        }

        ParkingLot lot = lotOpt.get();

        //Save report
        Report report = new Report();
        report.setLotID(request.lotId());
        report.setStatusReported(request.statusReported());
        report.setUserID(request.userId());
        report.setTimeStamp(LocalDateTime.now());
        report.setVerified(false);
        reportRepository.save(report);

        return ResponseEntity.ok(report);
    }
}
