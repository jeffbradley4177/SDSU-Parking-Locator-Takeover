package edu.sdsu.parking_backend.features.parking.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

import edu.sdsu.parking_backend.features.parking.model.ParkingLot;
import edu.sdsu.parking_backend.features.parking.model.Report;
import edu.sdsu.parking_backend.features.parking.repository.ParkingLotRepository;
import edu.sdsu.parking_backend.features.parking.repository.ReportRepository;
import edu.sdsu.parking_backend.features.parking.service.ParkingLotService;
import edu.sdsu.parking_backend.shared.response.LotDetailsResponse;
import edu.sdsu.parking_backend.shared.request.StatusUpdateRequest;

@RestController         // handle web req
@RequestMapping("/api") // every endpoint url start with "/api"
@CrossOrigin(origins = "http://localhost:5173")

public class ParkingLotController 
{
    private final ParkingLotRepository parkingLotRepo;
    private final ParkingLotService parkingLotService;
    private final ReportRepository reportRepository;

    public ParkingLotController(ParkingLotRepository parkingLotRepo, 
                                ParkingLotService parkingLotService,
                                ReportRepository reportRepository)
    {this.parkingLotRepo = parkingLotRepo; this.parkingLotService = parkingLotService; this.reportRepository = reportRepository;}

    // ENDPOINTS:

    @GetMapping("/lots")
    public List<ParkingLot> getAllLots()
    {return parkingLotRepo.findAll();} // get a list of all parking lots from the database

    @GetMapping("/lots/{id}")
    public ResponseEntity<ParkingLot> getLotById(@PathVariable int id) {
        return parkingLotRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    // flips FULL/NOT FULL and records a timestamp
    @PostMapping("/lots/{id}/status")
    public ResponseEntity<?> updateStatus(
            @PathVariable int id,
            @RequestBody StatusUpdateRequest request) {

        boolean ok = parkingLotService.updateStatus(id, request.status());
        if (!ok) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid lot or status"));
        }
        return ResponseEntity.ok(Map.of("ok", true));
    }
    @GetMapping("/lots/{id}/details")
    public ResponseEntity<LotDetailsResponse> getLotDetails(@PathVariable int id) {
        var lotOpt = parkingLotRepo.findById(id);
        if (lotOpt.isEmpty()) return ResponseEntity.notFound().build();

        List<Report> reports = reportRepository.findTop10ByLotIDOrderByTimeStampDesc(id);

        return ResponseEntity.ok(new LotDetailsResponse(lotOpt.get(), reports));
    }
}
