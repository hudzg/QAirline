package com.QAirline.repository;

import com.QAirline.model.FlightInstance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface FlightInstanceRepository extends JpaRepository<FlightInstance, Long> {
    @Query("SELECT fi FROM FlightInstance fi WHERE fi.date = :date AND fi.flight.id = :flightId")
    Optional<FlightInstance> findByDateAndFlightId(@Param("date") LocalDate date, @Param("flightId") Long flightId);

    @Query("SELECT DISTINCT fi FROM Seat s JOIN s.flightInstance fi WHERE s.user.id = :userId")
    List<FlightInstance> findFlightInstancesByUserId(@Param("userId") Long userId);

    @Query("SELECT FUNCTION('MONTH', fi.date) AS month, COUNT(fi) " +
            "FROM FlightInstance fi " +
            "WHERE FUNCTION('YEAR', fi.date) = :year " +
            "GROUP BY FUNCTION('MONTH', fi.date) " +
            "ORDER BY month")
    List<Object[]> countFlightsByMonth(@Param("year") int year);
}
