package com.QAirline.controller;

import com.QAirline.model.Flight;
import com.QAirline.model.User;
import com.QAirline.request.CreateTicketRequest;
import com.QAirline.request.GetFlightRequest;
import com.QAirline.service.FlightService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flight")
public class FlightController {
    @Autowired
    UserService userService;
    @Autowired
    FlightService flightService;
    @GetMapping
    public ResponseEntity<List<Flight>> getFlight(@RequestBody GetFlightRequest getFlightRequest,
                                                  @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        List<Flight> flights = flightService.getFlight(getFlightRequest);

        return new ResponseEntity<>(flights, HttpStatus.OK);
    }
}
