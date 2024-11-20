package com.QAirline.repository;

import com.QAirline.model.FlightLeg;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightLegRepository extends JpaRepository<FlightLeg, Long> {
}
