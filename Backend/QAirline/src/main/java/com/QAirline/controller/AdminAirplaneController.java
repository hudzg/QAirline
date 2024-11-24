package com.QAirline.controller;

import com.QAirline.model.Airplane;
import com.QAirline.model.User;
import com.QAirline.response.MessageResponse;
import com.QAirline.service.AirplaneService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/airplane")
public class AdminAirplaneController {
    @Autowired
    private UserService userService;
    @Autowired
    private AirplaneService airplaneService;

    @PostMapping()
    public ResponseEntity<Airplane> createAirplane(
            @RequestBody Airplane airplane,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Airplane createdAirplane = airplaneService.createAirplane(airplane);

        return new ResponseEntity<>(createdAirplane, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Airplane>> getAllAirplane(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Airplane> AirplaneList =  airplaneService.getAllAirplane();

        return new ResponseEntity<>(AirplaneList, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Airplane> updateAirplane(
            @RequestBody Airplane Airplane,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Airplane updatedAirplane = airplaneService.updateAirplane(id, Airplane);

        return new ResponseEntity<>(updatedAirplane, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteAirplane(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        airplaneService.deleteAirplane(id);

        MessageResponse response = new MessageResponse();
        response.setMessage("Airplane deleted successfully");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
