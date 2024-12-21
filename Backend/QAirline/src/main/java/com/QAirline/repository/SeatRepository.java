package com.QAirline.repository;

import com.QAirline.model.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long> {
    @Query("SELECT COUNT(s) FROM Seat s WHERE s.ticket.id = :ticketId AND s.flightInstance.id = :flightInstanceId")
    long countByTicketIdAndFlightInstanceId(@Param("ticketId") Long ticketId, @Param("flightInstanceId") Long flightInstanceId);
    @Query("SELECT s FROM Seat s WHERE s.user.id = :userId AND s.flightInstance.id = :flightInstanceId")
    List<Seat> findByUserIdAndFlightInstanceId(@Param("userId") Long userId, @Param("flightInstanceId") Long flightInstanceId);

    @Query("SELECT SUM(s.ticket.price) FROM Seat s")
    Long getTotalPriceFromSeats();

    @Query("SELECT FUNCTION('MONTH', fi.date) AS month, COUNT(s) " +
            "FROM Seat s " +
            "JOIN s.flightInstance fi " +
            "WHERE FUNCTION('YEAR', fi.date) = :year " +
            "GROUP BY FUNCTION('MONTH', fi.date) " +
            "ORDER BY month")
    List<Object[]> countSeatsByMonth(@Param("year") int year);
}
