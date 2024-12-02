package com.QAirline.service;

import com.QAirline.model.Airplane;
import com.QAirline.model.FlightInstance;
import com.QAirline.model.Seat;
import com.QAirline.model.User;
import com.QAirline.repository.FlightInstanceRepository;
import com.QAirline.repository.SeatRepository;
import com.QAirline.request.CreateFlightInstanceRequest;
import com.QAirline.request.CreateSeatRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    @Override
    public Seat createSeat(CreateSeatRequest createSeatRequest, User user) throws Exception {
        Seat seat = new Seat();
        seat.setUser(user);
        seat.setTicket(createSeatRequest.getTicket());
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
}
