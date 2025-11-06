package edu.sdsu.parking_backend;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController         // handle web req
@RequestMapping("/api") // every endpoint url start with "/api"

public class ParkingLotController 
{
    private final ParkingLotRepo parkingLotRepo;
    private final ParkingLotService parkingLotService;

    public ParkingLotController(ParkingLotRepo parkingLotRepo, ParkingLotService parkingLotService)
    {this.parkingLotRepo = parkingLotRepo; this.parkingLotService = parkingLotService;}

    // ENDPOINTS:

    @GetMapping("/lots")
    public List<ParkingLot> getAllLots()
    {return parkingLotRepo.findAll();} // get a list of all parking lots from the database

    @GetMapping("/lots/{id}")
    public ParkingLot getLotById(@PathVariable int id) 
    {return parkingLotRepo.findById(id).orElse(null);} // search for a parking lot with the specific id#

    // flips FULL/NOT FULL and records a timestamp
    @PostMapping("/lots/{id}/occupied")
    public Map<String, Object> updateOccupied(@PathVariable int id, @RequestParam int occupied) {
        boolean ok = parkingLotService.updateOccupied(id, occupied);
        return Map.of("ok", ok);
    }
}
