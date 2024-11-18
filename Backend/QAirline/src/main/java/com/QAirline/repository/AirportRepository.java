package com.QAirline.repository;

import com.QAirline.model.Airport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirportRepository extends JpaRepository<Airport, Long> {

}
