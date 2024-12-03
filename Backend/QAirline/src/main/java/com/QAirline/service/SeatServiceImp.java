package com.QAirline.service;

import com.QAirline.model.*;
import com.QAirline.repository.FlightInstanceRepository;
import com.QAirline.repository.SeatRepository;
import com.QAirline.repository.TicketRepository;
import com.QAirline.request.CreateFlightInstanceRequest;
import com.QAirline.request.CreateSeatRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SeatServiceImp implements SeatService{
    @Autowired
    private SeatRepository seatRepository;
    @Autowired
    private FlightInstanceRepository flightInstanceRepository;
    @Autowired
    private FlightInstanceService flightInstanceService;
    @Autowired
    private FlightService flightService;
    @Autowired
    private TicketRepository ticketRepository;
    @Override
    public Seat createSeat(CreateSeatRequest createSeatRequest, User user) throws Exception {
        Seat seat = new Seat();
        seat.setUser(user);

        Optional<Ticket> optionalTicket = ticketRepository.findById(createSeatRequest.getTicket().getId());
        Ticket ticket = optionalTicket.get();
        seat.setTicket(ticket);

        seat.setSeatNumber(createSeatRequest.getSeatNumber());
        seat.setCitizenId(createSeatRequest.getCitizenId());
        seat.setFirstName(createSeatRequest.getFirstName());
        seat.setLastName(createSeatRequest.getLastName());
        seat.setPhone(createSeatRequest.getPhone());
        seat.setDob(createSeatRequest.getDob());
        seat.setGender(createSeatRequest.getGender());

        FlightInstance flightInstance;

        Optional<FlightInstance> optionalFlightInstance = flightInstanceRepository.findByDateAndFlightId(createSeatRequest.getDate(), createSeatRequest.getFlightId());
        if (optionalFlightInstance.isEmpty()) {
            CreateFlightInstanceRequest createFlightInstanceRequest = new CreateFlightInstanceRequest();
            createFlightInstanceRequest.setDate(createSeatRequest.getDate());
            createFlightInstanceRequest.setFlight(flightService.findFlightById(createSeatRequest.getFlightId()));
            flightInstance = flightInstanceService.createFlightInstance(createFlightInstanceRequest);
        }
        else {
            flightInstance = optionalFlightInstance.get();
        }

        seat.setFlightInstance(flightInstance);

        Seat savedSeat = seatRepository.save(seat);

        user.getSeats().add(savedSeat);
        flightInstance.getSeats().add(savedSeat);

        return savedSeat;
    }

    @Override
    public List<Seat> getSeatsByUserAndFlightInstance(Long userId, Long flightInstanceId) {
        return seatRepository.findByUserIdAndFlightInstanceId(userId, flightInstanceId);
    }
}
