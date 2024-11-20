package com.QAirline.controller;

import com.QAirline.model.Airport;
import com.QAirline.model.User;
import com.QAirline.response.MessageResponse;
import com.QAirline.service.AirportService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/airport")
public class AdminAirportController {
    @Autowired
    private AirportService airportService;

    @Autowired
    private UserService userService;
    @PostMapping()
    public ResponseEntity<Airport> createAirport(
            @RequestBody Airport airport,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Airport createdAirport = airportService.createAirport(airport);

        return new ResponseEntity<>(createdAirport, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Airport>> getAllAirport(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Airport> airportList =  airportService.getAllAirport();

        return new ResponseEntity<>(airportList, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Airport> updateAirport(
            @RequestBody Airport airport,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Airport updatedAirport = airportService.updateAirport(id, airport);

        return new ResponseEntity<>(updatedAirport, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteAirport(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        airportService.deleteAirport(id);

        MessageResponse response = new MessageResponse();
        response.setMessage("Airport deleted successfully");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
