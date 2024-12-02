package com.QAirline.repository;

import com.QAirline.model.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SeatRepository extends JpaRepository<Seat, Long> {
    @Query("SELECT COUNT(s) FROM Seat s WHERE s.ticket.id = :ticketId AND s.flightInstance.id = :flightInstanceId")
    long countByTicketIdAndFlightInstanceId(@Param("ticketId") Long ticketId, @Param("flightInstanceId") Long flightInstanceId);
}
