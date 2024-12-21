package com.QAirline.service;

import com.QAirline.model.*;
import com.QAirline.repository.FlightInstanceRepository;
import com.QAirline.repository.SeatRepository;
import com.QAirline.repository.TicketRepository;
import com.QAirline.request.CreateFlightInstanceRequest;
import com.QAirline.request.CreateSeatRequest;
import com.QAirline.response.GetFlightResponse;
import com.QAirline.response.GetSeatMapResponse;
import com.QAirline.response.GetSeatsByUserAndFlightInstanceResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class SeatServiceImp implements SeatService {
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
        } else {
            flightInstance = optionalFlightInstance.get();
        }

        seat.setFlightInstance(flightInstance);

        Seat savedSeat = seatRepository.save(seat);

        user.getSeats().add(savedSeat);
        flightInstance.getSeats().add(savedSeat);

        return savedSeat;
    }

    @Override
    public List<GetSeatsByUserAndFlightInstanceResponse> getSeatsByUserAndFlightInstance(Long userId, Long flightInstanceId) {
        List<Seat> seats = seatRepository.findByUserIdAndFlightInstanceId(userId, flightInstanceId);
        List<GetSeatsByUserAndFlightInstanceResponse> responses = new ArrayList<>();
        for(Seat seat : seats) {
            GetSeatsByUserAndFlightInstanceResponse response = new GetSeatsByUserAndFlightInstanceResponse();
            response.setId(seat.getId());
            response.setUser(seat.getUser());
            response.setFlightInstance(seat.getFlightInstance());
            response.setTicket(seat.getTicket());
            response.setSeatNumber(seat.getSeatNumber());
            response.setCitizenId(seat.getCitizenId());
            response.setFirstName(seat.getFirstName());
            response.setLastName(seat.getLastName());
            response.setPhone(seat.getPhone());
            response.setDob(seat.getDob());
            response.setGender(seat.getGender());
            response.setFlightLegs(seat.getFlightInstance().getFlight().getFlightLegs());

            responses.add(response);
        }
        return responses;
    }

    @Override
    public GetSeatMapResponse getSeatMap(Long flightId, LocalDate date) throws Exception {
        GetSeatMapResponse response = new GetSeatMapResponse();
        Flight flight = flightService.findFlightById(flightId);
        response.setAirplane(flight.getFlightLegs().get(0).getAirplane());
        response.setSeats(new ArrayList<>());
        Optional<FlightInstance> optionalFlightInstance = flightInstanceRepository.findByDateAndFlightId(date, flightId);
        if (optionalFlightInstance.isPresent()) {
            FlightInstance flightInstance = optionalFlightInstance.get();
            response.setSeats(flightInstance.getSeats());
        }
        return response;
    }

    // lấy số lượng seat theo tháng
    public List<Long> getSeatCountsByMonth() {
        int currentYear = LocalDate.now().getYear();

        List<Object[]> results = seatRepository.countSeatsByMonth(currentYear);

        List<Long> monthlyCounts = new ArrayList<>(Arrays.asList(new Long[12]));
        Collections.fill(monthlyCounts, 0L);

        for (Object[] result : results) {
            Integer month = ((Number) result[0]).intValue();
            Long count = (Long) result[1];
            monthlyCounts.set(month - 1, count);
        }

        return monthlyCounts;
    }

    @Override
    public void deleteSeat(Long id) {
        seatRepository.deleteById(id);
    }
}
