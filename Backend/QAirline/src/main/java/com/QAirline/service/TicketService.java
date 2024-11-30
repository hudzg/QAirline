package com.QAirline.service;

import com.QAirline.model.Flight;
import com.QAirline.model.Ticket;
import com.QAirline.request.CreateTicketRequest;

public interface TicketService {
    public Ticket createTicket(Ticket ticket, Flight flight);
}
