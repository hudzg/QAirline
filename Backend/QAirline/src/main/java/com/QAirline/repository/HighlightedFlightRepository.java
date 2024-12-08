package com.QAirline.repository;

import com.QAirline.model.HighlightedFlight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HighlightedFlightRepository extends JpaRepository<HighlightedFlight, Long> {
}
