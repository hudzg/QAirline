package com.QAirline.controller;

import com.QAirline.model.Flight;
import com.QAirline.model.FlightInstance;
import com.QAirline.model.LegInstance;
import com.QAirline.model.User;
import com.QAirline.request.CreateFlightInstanceRequest;
import com.QAirline.service.FlightInstanceService;
import com.QAirline.service.LegInstanceService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/flight-instance")
public class AdminFlightInstanceController {
    @Autowired
    private UserService userService;
    @Autowired
    private FlightInstanceService flightInstanceService;
    @Autowired
    private LegInstanceService legInstanceService;

    @PostMapping()
    public ResponseEntity<FlightInstance> createFlightInstance(
            @RequestBody CreateFlightInstanceRequest createFlightInstanceRequest,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        FlightInstance createdFlightInstance = flightInstanceService.createFlightInstance(createFlightInstanceRequest);

        return new ResponseEntity<>(createdFlightInstance, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<FlightInstance>> getAllFlightInstance(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<FlightInstance> flightInstances = flightInstanceService.getAllFlightInstance();

        return new ResponseEntity<>(flightInstances, HttpStatus.OK);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<FlightInstance> updateFlightInstance(
//            @RequestBody FlightInstance flightInstance,
//            @RequestHeader("Authorization") String jwt,
//            @PathVariable Long id
//    ) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
//        FlightInstance updatedFlightInstance = flightInstanceService.updateFlightInstance(id, flightInstance);
//
//        return new ResponseEntity<>(updatedFlightInstance, HttpStatus.OK);
//    }

    @PutMapping("/leg-instance/{id}")
    public ResponseEntity<LegInstance> updateLegInstance(
            @RequestBody LegInstance legInstance,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        LegInstance updatedLegInstance = legInstanceService.updateLegInstance(id, legInstance);

        return new ResponseEntity<>(updatedLegInstance, HttpStatus.OK);
    }
}
