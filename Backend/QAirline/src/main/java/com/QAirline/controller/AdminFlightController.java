package com.QAirline.controller;

import com.QAirline.model.Airport;
import com.QAirline.model.Flight;
import com.QAirline.model.FlightLeg;
import com.QAirline.model.User;
import com.QAirline.response.MessageResponse;
import com.QAirline.service.FlightLegService;
import com.QAirline.service.FlightService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/flight")
public class AdminFlightController {
    @Autowired
    private FlightService flightService;

    @Autowired
    private UserService userService;
    @Autowired
    private FlightLegService flightLegService;

    @PostMapping()
    public ResponseEntity<Flight> createFlight(
            @RequestBody Flight flight,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Flight createdFlight = flightService.createFlight(flight);

        return new ResponseEntity<>(createdFlight, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Flight>> getAllFlight(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Flight> flights = flightService.getAllFlight();

        return new ResponseEntity<>(flights, HttpStatus.OK);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<Flight> updateFlight(
//            @RequestBody Flight flight,
//            @RequestHeader("Authorization") String jwt,
//            @PathVariable Long id
//    ) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
//        Flight updatedFlight = flightService.updateFlight(id, flight);
//
//        return new ResponseEntity<>(updatedFlight, HttpStatus.OK);
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFlight(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        flightService.deleteFlight(id);

        MessageResponse response = new MessageResponse();
        response.setMessage("Flight deleted successfully");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

//    @PutMapping("/{id}/flight-leg")
//    public ResponseEntity<Flight> addFlightLegToFlight(
//            @RequestBody FlightLeg flightLeg,
//            @RequestHeader("Authorization") String jwt,
//            @PathVariable Long id
//    ) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
//        Flight updatedFlight = flightService.addFlightLegToFlight(id, flightLeg);
//
//        return new ResponseEntity<>(updatedFlight, HttpStatus.OK);
//    }

//    @PutMapping("/flight-leg/{id}")
//    public ResponseEntity<FlightLeg> updateFlightLeg(
//            @RequestBody FlightLeg flightLeg,
//            @RequestHeader("Authorization") String jwt,
//            @PathVariable Long id
//    ) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
//        FlightLeg updatedFlightLeg = flightLegService.updateFlightLeg(id, flightLeg);
//
//        return new ResponseEntity<>(updatedFlightLeg, HttpStatus.OK);
//    }

//    @DeleteMapping("/flight-leg/{id}")
//    public ResponseEntity<MessageResponse> deleteFlightLeg(
//            @RequestHeader("Authorization") String jwt,
//            @PathVariable Long id
//    ) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
//        flightLegService.deleteFlightLeg(id);
//
//        MessageResponse response = new MessageResponse();
//        response.setMessage("Flight leg deleted successfully");
//
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
}
