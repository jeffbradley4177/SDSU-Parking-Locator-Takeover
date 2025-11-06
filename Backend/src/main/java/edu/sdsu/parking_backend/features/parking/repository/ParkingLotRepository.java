package edu.sdsu.parking_backend.features.parking.repository;

import edu.sdsu.parking_backend.features.parking.model.ParkingLot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkingLotRepository extends JpaRepository<ParkingLot, Integer> {}
