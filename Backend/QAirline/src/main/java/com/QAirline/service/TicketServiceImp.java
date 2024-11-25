package com.QAirline.service;

import com.QAirline.model.Flight;
import com.QAirline.model.Ticket;
import com.QAirline.repository.TicketRepository;
import com.QAirline.request.CreateTicketRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TicketServiceImp implements TicketService{
    @Autowired
    TicketRepository ticketRepository;
    @Autowired
    FlightService flightService;
    @Override
    public Ticket createTicket(CreateTicketRequest createTicketRequest) throws Exception {
        Ticket ticket = new Ticket();
        ticket.setTicketClass(createTicketRequest.getTicketClass());
        ticket.setAmount(createTicketRequest.getAmount());
        ticket.setPrice(createTicketRequest.getPrice());
        ticket.setRefund(createTicketRequest.isRefund());
        ticket.setCarryOnBaggage(createTicketRequest.getCarryOnBaggage());
        ticket.setCheckedBaggage(createTicketRequest.getCheckedBaggage());
        Flight flight = flightService.findFlightById(createTicketRequest.getFlightId());
        ticket.setFlight(flight);

        Ticket savedTicket = ticketRepository.save(ticket);

        flight.getTickets().add(savedTicket);

        return savedTicket;
    }
}
