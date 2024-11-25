package com.QAirline.service;

import com.QAirline.model.Flight;
import com.QAirline.model.FlightLeg;
import com.QAirline.repository.FlightRepository;
import com.QAirline.request.GetFlightRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FlightServiceImp implements FlightService {
    @Autowired
    FlightRepository flightRepository;
    @Autowired
    FlightLegService flightLegService;

    @Override
    public Flight createFlight(Flight flight) {
        Flight createdFlight = new Flight();
        createdFlight.setWeekdays(flight.getWeekdays());
        return flightRepository.save(createdFlight);
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

    @Override
    public Flight addFlightLegToFlight(Long id, FlightLeg flightLeg) throws Exception {
        Flight flight = findFlightById(id);
        FlightLeg createdFlightLeg = flightLegService.createFlightLeg(flightLeg, flight);
        flight.getFlightLegs().add(createdFlightLeg);
        return flight;
    }

    @Override
    public Flight findFlightById(Long id) throws Exception {
        Optional<Flight> optional = flightRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("Flight not found with id: " + id);
        }
        return optional.get();
    }

    @Override
    public List<Flight> getFlight(GetFlightRequest getFlightRequest) {
        List<Flight> flightRes = new ArrayList<>();
        List<Flight> allFlight = getAllFlight();
        for (Flight flight : allFlight) {
            if (flight.getFlightLegs().get(0).getDepartureAirport() == getFlightRequest.getDepartureAirport()
                    && flight.getFlightLegs().getLast().getArrivalAirport() == getFlightRequest.getArrivalAirport()
                    && ((flight.getWeekdays() >> (getFlightRequest.getDepartureTime().getDayOfWeek().getValue() - 1)) & 1) == 1) {
                flightRes.add(flight);
            }
        }
        return flightRes;
    }


}
