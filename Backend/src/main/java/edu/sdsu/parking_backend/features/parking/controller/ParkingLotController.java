package edu.sdsu.parking_backend.features.parking.controller;

import org.springframework.web.bind.annotation.*;

import edu.sdsu.parking_backend.features.parking.model.ParkingLot;
import edu.sdsu.parking_backend.features.parking.repository.ParkingLotRepository;
import edu.sdsu.parking_backend.features.parking.service.ParkingLotService;
import org.springframework.http.ResponseEntity;
import edu.sdsu.parking_backend.shared.request.StatusUpdateRequest;

import java.util.List;
import java.util.Map;

@RestController         // handle web req
@RequestMapping("/api") // every endpoint url start with "/api"
@CrossOrigin(origins = "http://localhost:5173")

public class ParkingLotController 
{
    private final ParkingLotRepository parkingLotRepo;
    private final ParkingLotService parkingLotService;

    public ParkingLotController(ParkingLotRepository parkingLotRepo, ParkingLotService parkingLotService)
    {this.parkingLotRepo = parkingLotRepo; this.parkingLotService = parkingLotService;}

    // ENDPOINTS:

    @GetMapping("/lots")
    public List<ParkingLot> getAllLots()
    {return parkingLotRepo.findAll();} // get a list of all parking lots from the database

    @GetMapping("/lots/{id}")
    public ParkingLot getLotById(@PathVariable int id) 
    {return parkingLotRepo.findById(id).orElse(null);} // search for a parking lot with the specific id#

    // flips FULL/NOT FULL and records a timestamp
    @PostMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(
            @PathVariable int id,
            @RequestBody StatusUpdateRequest request) {

        boolean ok = parkingLotService.updateStatus(id, request.status());
        if (!ok) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid lot or status"));
        }
        return ResponseEntity.ok(Map.of("ok", true));
    }
}
