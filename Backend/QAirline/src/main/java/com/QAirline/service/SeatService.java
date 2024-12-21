package com.QAirline.service;

import com.QAirline.model.Seat;
import com.QAirline.model.User;
import com.QAirline.request.CreateSeatRequest;
import com.QAirline.response.GetSeatMapResponse;
import com.QAirline.response.GetSeatsByUserAndFlightInstanceResponse;

import java.time.LocalDate;
import java.util.List;

public interface SeatService {
    public Seat createSeat(CreateSeatRequest createSeatRequest, User user) throws Exception;
    public List<GetSeatsByUserAndFlightInstanceResponse> getSeatsByUserAndFlightInstance(Long userId, Long flightInstanceId);
    public GetSeatMapResponse getSeatMap(Long flightId, LocalDate date) throws Exception;
    public List<Long> getSeatCountsByMonth();
    public void deleteSeat(Long id);
}
