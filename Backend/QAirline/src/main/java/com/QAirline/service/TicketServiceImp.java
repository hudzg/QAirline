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
    @Override
    public Ticket createTicket(Ticket ticket, Flight flight) {
        Ticket createdTicket = new Ticket();
        createdTicket.setTicketClass(ticket.getTicketClass());
        createdTicket.setAmount(ticket.getAmount());
        createdTicket.setPrice(ticket.getPrice());
        createdTicket.setRefund(ticket.isRefund());
        createdTicket.setCarryOnBaggage(ticket.getCarryOnBaggage());
        createdTicket.setCheckedBaggage(ticket.getCheckedBaggage());
        ticket.setFlight(flight);

        Ticket savedTicket = ticketRepository.save(ticket);

        flight.getTickets().add(savedTicket);

        return savedTicket;
    }
}
