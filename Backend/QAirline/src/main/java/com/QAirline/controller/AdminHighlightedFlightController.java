package com.QAirline.controller;

import com.QAirline.model.HighlightedFlight;
import com.QAirline.model.User;
import com.QAirline.response.MessageResponse;
import com.QAirline.service.HighlightedFlightService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/highlighted-flight")
public class AdminHighlightedFlightController {
    @Autowired
    private UserService userService;
    @Autowired
    private HighlightedFlightService highlightedFlightService;

    @PostMapping()
    public ResponseEntity<HighlightedFlight> createHighlightedFlight(
            @RequestBody HighlightedFlight flight,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        HighlightedFlight createdHighlightedFlight = highlightedFlightService.createHighlightedFlight(flight);

        return new ResponseEntity<>(createdHighlightedFlight, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<HighlightedFlight>> getAllHighlightedFlight(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<HighlightedFlight> flights = highlightedFlightService.getAllHighlightedFlight();

        return new ResponseEntity<>(flights, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HighlightedFlight> updateHighlightedFlight(
            @RequestBody HighlightedFlight flight,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        HighlightedFlight updatedHighlightedFlight = highlightedFlightService.updateHighlightedFlight(id, flight);

        return new ResponseEntity<>(updatedHighlightedFlight, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteHighlightedFlight(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        highlightedFlightService.deleteHighlightedFlight(id);

        MessageResponse response = new MessageResponse();
        response.setMessage("HighlightedFlight deleted successfully");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
