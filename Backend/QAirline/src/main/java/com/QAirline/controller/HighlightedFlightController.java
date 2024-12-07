package com.QAirline.controller;

import com.QAirline.model.HeroBanner;
import com.QAirline.model.HighlightedFlight;
import com.QAirline.service.HighlightedFlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/highlighted-flight")
public class HighlightedFlightController {
    @Autowired
    private HighlightedFlightService highlightedFlightService;
    @GetMapping()
    public ResponseEntity<List<HighlightedFlight>> getHighlightedFlight(
//            @RequestHeader("Authorization") String jwt
    ) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
        List<HighlightedFlight> flights = highlightedFlightService.getAllHighlightedFlight();

        return new ResponseEntity<>(flights, HttpStatus.OK);
    }
}
