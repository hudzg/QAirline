package com.QAirline.service;

import com.QAirline.model.Flight;
import com.QAirline.model.FlightLeg;
import com.QAirline.model.Ticket;
import com.QAirline.repository.FlightRepository;
import com.QAirline.request.GetFlightRequest;
import com.QAirline.response.GetFlightResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FlightServiceImp implements FlightService {
    @Autowired
    private FlightRepository flightRepository;
    @Autowired
    private FlightLegService flightLegService;
    @Autowired
    private TicketService ticketService;

    @Override
    public Flight createFlight(Flight flight) {
        Flight createdFlight = new Flight();
        createdFlight.setWeekdays(flight.getWeekdays());

        Flight savedFlight = flightRepository.save(createdFlight);

        for(FlightLeg flightLeg : flight.getFlightLegs()) {
            flightLegService.createFlightLeg(flightLeg, savedFlight);
        }
        for(Ticket ticket : flight.getTickets()) {
            ticketService.createTicket(ticket, createdFlight);
        }
        return savedFlight;
    }

    @Override
    public List<Flight> getAllFlight() {
        return flightRepository.findAll();
    }

    @Override
    public Flight updateFlight(Long id, Flight updatedFlight) throws Exception {
        Flight flight = findFlightById(id);
        flight.setWeekdays(updatedFlight.getWeekdays());
        return flightRepository.save(flight);
    }

    @Override
    public void deleteFlight(Long id) {
        flightRepository.deleteById(id);
    }

//    @Override
//    public Flight addFlightLegToFlight(Long id, FlightLeg flightLeg) throws Exception {
//        Flight flight = findFlightById(id);
//        FlightLeg createdFlightLeg = flightLegService.createFlightLeg(flightLeg, flight);
//        flight.getFlightLegs().add(createdFlightLeg);
//        return flight;
//    }

    @Override
    public Flight findFlightById(Long id) throws Exception {
        Optional<Flight> optional = flightRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("Flight not found with id: " + id);
        }
        return optional.get();
    }


    // Thiếu Check flight instance with date
    @Override
    public List<GetFlightResponse> getFlight(GetFlightRequest getFlightRequest) {
        List<GetFlightResponse> getFlightResponses = new ArrayList<>();
        List<Flight> allFlight = getAllFlight();
        for (Flight flight : allFlight) {
            if (flight.getFlightLegs().get(0).getDepartureAirport().getId().equals(getFlightRequest.getDepartureAirport().getId())
                    && flight.getFlightLegs().getLast().getArrivalAirport().getId().equals(getFlightRequest.getArrivalAirport().getId())
                    && ((flight.getWeekdays() >> (getFlightRequest.getDepartureTime().getDayOfWeek().getValue() - 1)) & 1) == 1) {

                GetFlightResponse flightResponse = new GetFlightResponse();

                flightResponse.setFlightId(flight.getId());
                flightResponse.setDepartureTime(flight.getFlightLegs().get(0).getDepartureTime());
                flightResponse.setArrivalTime(flight.getFlightLegs().getLast().getArrivalTime());
                flightResponse.setHourDuration((long) Duration.between(flightResponse.getDepartureTime(), flightResponse.getArrivalTime()).toHoursPart());
                flightResponse.setMinuteDuration((long) Duration.between(flightResponse.getDepartureTime(), flightResponse.getArrivalTime()).toMinutesPart());
                flightResponse.setTickets(flight.getTickets());

                getFlightResponses.add(flightResponse);
            }
        }
        return getFlightResponses;
    }


}
