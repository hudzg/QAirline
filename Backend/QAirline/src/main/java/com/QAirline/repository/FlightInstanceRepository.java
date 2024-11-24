package com.QAirline.repository;

import com.QAirline.model.FlightInstance;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlightInstanceRepository extends JpaRepository<FlightInstance, Long> {
}
