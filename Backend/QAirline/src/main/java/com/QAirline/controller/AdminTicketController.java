package com.QAirline.controller;

import com.QAirline.model.Ticket;
import com.QAirline.model.User;
import com.QAirline.request.CreateTicketRequest;
import com.QAirline.service.TicketService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/ticket")
public class AdminTicketController {
    @Autowired
    private UserService userService;
    @Autowired
    private TicketService ticketService;

    @PostMapping()
    public ResponseEntity<Ticket> createTicket(
            @RequestBody CreateTicketRequest createTicketRequest,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Ticket ticket = ticketService.createTicket(createTicketRequest);

        return new ResponseEntity<>(ticket, HttpStatus.CREATED);
    }
}
