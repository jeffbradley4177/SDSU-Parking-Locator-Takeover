package edu.sdsu.parking_backend.features.parking.repository;

import edu.sdsu.parking_backend.features.parking.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer> {
    List<Report> findTop10ByLotIDOrderByTimeStampDesc(int lotID);
}