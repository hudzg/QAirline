package com.QAirline.controller;

import com.QAirline.model.Ticket;
import com.QAirline.model.User;
import com.QAirline.request.CreateTicketRequest;
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
//    @PostMapping()
//    public ResponseEntity<Ticket> createSeat(
//            @RequestBody CreateTicketRequest createTicketRequest,
//            @RequestHeader("Authorization") String jwt
//    ) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
//
//
//        return new ResponseEntity<>(ticket, HttpStatus.CREATED);
//    }
}
