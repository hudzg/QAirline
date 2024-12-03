package com.QAirline.service;

import com.QAirline.model.Seat;
import com.QAirline.model.User;
import com.QAirline.request.CreateSeatRequest;

public interface SeatService {
    Seat createSeat(CreateSeatRequest createSeatRequest, User user) throws Exception;
}
