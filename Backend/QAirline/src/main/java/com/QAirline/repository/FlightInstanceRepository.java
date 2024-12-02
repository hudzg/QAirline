package com.QAirline.repository;

import com.QAirline.model.FlightInstance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Optional;

public interface FlightInstanceRepository extends JpaRepository<FlightInstance, Long> {
    @Query("SELECT fi FROM FlightInstance fi WHERE fi.date = :date AND fi.flight.id = :flightId")
    Optional<FlightInstance> findByDateAndFlightId(@Param("date") LocalDate date, @Param("flightId") Long flightId);
}
