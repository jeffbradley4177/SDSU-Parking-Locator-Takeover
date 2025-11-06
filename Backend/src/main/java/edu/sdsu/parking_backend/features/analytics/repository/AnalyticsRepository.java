package edu.sdsu.parking_backend.features.analytics.repository;

import edu.sdsu.parking_backend.features.analytics.model.Analytics;
import org.springframework.data.jpa.repository.JpaRepository;

// Handles + saves retrieving Analytics reports from database
public interface AnalyticsRepository extends JpaRepository<Analytics, Integer> {}
