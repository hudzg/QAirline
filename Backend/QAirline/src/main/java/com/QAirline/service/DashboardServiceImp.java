package com.QAirline.service;

import com.QAirline.repository.*;
import com.QAirline.response.DashboardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;

@Service
public class DashboardServiceImp implements DashboardService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private AirportRepository airportRepository;
    @Autowired
    private AirplaneRepository airplaneRepository;
    @Autowired
    private FeedbackRepository feedbackRepository;
    @Autowired
    private SeatRepository seatRepository;
    @Autowired
    private FeedbackService feedbackService;
    @Autowired
    private FlightInstanceService flightInstanceService;
    @Autowired
    private SeatService seatService;

    @Override
    public DashboardResponse getDashboard() {
        DashboardResponse response = new DashboardResponse();
        response.setNumUser(userRepository.count());
        response.setNumAirport(airportRepository.count());
        response.setNumAirplane(airplaneRepository.count());
        response.setNumFeedback(feedbackRepository.count());
        response.setRevenue(seatRepository.getTotalPriceFromSeats());
        response.setFeedbacks(feedbackService.getFeedbackCountsByNumStar());
        response.setFlights(flightInstanceService.getFlightCountsByMonth());
        response.setSeats(seatService.getSeatCountsByMonth());
        return response;
    }
}
