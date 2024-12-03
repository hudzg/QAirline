package com.QAirline.service;

import com.QAirline.model.Seat;
import com.QAirline.model.User;
import com.QAirline.request.CreateSeatRequest;
import com.QAirline.response.GetSeatsByUserAndFlightInstanceResponse;

import java.util.List;

public interface SeatService {
    public Seat createSeat(CreateSeatRequest createSeatRequest, User user) throws Exception;
    public List<GetSeatsByUserAndFlightInstanceResponse> getSeatsByUserAndFlightInstance(Long userId, Long flightInstanceId);
}
