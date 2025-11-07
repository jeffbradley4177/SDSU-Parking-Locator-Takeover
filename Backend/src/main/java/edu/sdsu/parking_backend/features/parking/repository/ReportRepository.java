package edu.sdsu.parking_backend.features.parking.repository;

import edu.sdsu.parking_backend.features.parking.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer> {} 