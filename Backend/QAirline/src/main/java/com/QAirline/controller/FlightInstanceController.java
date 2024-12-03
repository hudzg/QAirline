package com.QAirline.controller;

import com.QAirline.model.User;
import com.QAirline.response.GetFlightInstanceByUserResponse;
import com.QAirline.service.FlightInstanceService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/flight-instance")
public class FlightInstanceController {
    @Autowired
    private UserService userService;
    @Autowired
    private FlightInstanceService flightInstanceService;
    @GetMapping("/user")
    public ResponseEntity<List<GetFlightInstanceByUserResponse>> getFlightInstanceByUser(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<GetFlightInstanceByUserResponse> flightInstanceByUserResponses =  flightInstanceService.getFlightInstanceByUser(user);

        return new ResponseEntity<>(flightInstanceByUserResponses, HttpStatus.OK);
    }
}
