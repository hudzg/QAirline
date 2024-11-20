package com.QAirline.service;

import com.QAirline.model.Flight;
import com.QAirline.model.FlightLeg;

import java.util.List;

public interface FlightService {
    public Flight createFlight(Flight flight);
    public List<Flight> getAllFlight();
    public Flight updateFlight(Long id, Flight updatedFlight) throws Exception;
    public void deleteFlight(Long id);

    public Flight addFlightLegToFlight(Long id, FlightLeg flightLeg) throws Exception;

    public Flight findFlightById(Long id) throws Exception;
}
