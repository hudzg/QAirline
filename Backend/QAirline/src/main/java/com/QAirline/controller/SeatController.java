package com.QAirline.controller;

import com.QAirline.model.Seat;
import com.QAirline.model.User;
import com.QAirline.request.CreateSeatRequest;
import com.QAirline.service.SeatService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/seat")
public class SeatController {
    @Autowired
    private UserService userService;
    @Autowired
    private SeatService seatService;
    @PostMapping()
    public ResponseEntity<Seat> createSeat(
            @RequestBody CreateSeatRequest createSeatRequest,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Seat seat = seatService.createSeat(createSeatRequest, user);

        return new ResponseEntity<>(seat, HttpStatus.CREATED);
    }
}
