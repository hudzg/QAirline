package com.QAirline.controller;

import com.QAirline.model.Flight;
import com.QAirline.model.User;
import com.QAirline.request.CreateTicketRequest;
import com.QAirline.request.GetFlightRequest;
import com.QAirline.response.GetFlightResponse;
import com.QAirline.service.AirportService;
import com.QAirline.service.FlightService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/flight")
public class FlightController {
    @Autowired
    UserService userService;
    @Autowired
    FlightService flightService;
    @Autowired
    AirportService airportService;
    @GetMapping
    public ResponseEntity<List<GetFlightResponse>> getFlight(@RequestParam Long departureAirportId,
                                                             @RequestParam Long arrivalAirportId,
                                                             @RequestParam String date,
                                                             @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        GetFlightRequest getFlightRequest = new GetFlightRequest(airportService.findAirportById(departureAirportId),
                airportService.findAirportById(arrivalAirportId), LocalDate.parse(date));

        List<GetFlightResponse> getFlightResponses = flightService.getFlight(getFlightRequest);

        return new ResponseEntity<>(getFlightResponses, HttpStatus.OK);
    }
}
