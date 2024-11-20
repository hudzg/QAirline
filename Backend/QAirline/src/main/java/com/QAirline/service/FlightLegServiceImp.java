package com.QAirline.service;

import com.QAirline.model.Airport;
import com.QAirline.model.Flight;
import com.QAirline.model.FlightLeg;
import com.QAirline.repository.FlightLegRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FlightLegServiceImp implements FlightLegService {
    @Autowired
    FlightLegRepository flightLegRepository;
    @Override
    public FlightLeg createFlightLeg(FlightLeg createdFlightLeg, Flight flight) {
        FlightLeg flightLeg = new FlightLeg();
        flightLeg.setAirplane(createdFlightLeg.getAirplane());
        flightLeg.setArrivalTime(createdFlightLeg.getArrivalTime());
        flightLeg.setArrivalAirport(createdFlightLeg.getArrivalAirport());
        flightLeg.setDepartureAirport(createdFlightLeg.getDepartureAirport());
        flightLeg.setDepartureTime(createdFlightLeg.getDepartureTime());
        flightLeg.setFlight(flight);
        return flightLegRepository.save(flightLeg);
    }

    @Override
    public FlightLeg updateFlightLeg(Long id, FlightLeg updatedFlightLeg) throws Exception {
        FlightLeg flightLeg = findFlightLegById(id);
        flightLeg.setAirplane(updatedFlightLeg.getAirplane());
        flightLeg.setArrivalTime(updatedFlightLeg.getArrivalTime());
        flightLeg.setArrivalAirport(updatedFlightLeg.getArrivalAirport());
        flightLeg.setDepartureAirport(updatedFlightLeg.getDepartureAirport());
        flightLeg.setDepartureTime(updatedFlightLeg.getDepartureTime());
        return flightLegRepository.save(flightLeg);
    }

    @Override
    public void deleteFlightLeg(Long id) {
        flightLegRepository.deleteById(id);
    }

    @Override
    public FlightLeg findFlightLegById(Long id) throws Exception {
        Optional<FlightLeg> optional = flightLegRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("FlightLeg not found with id: " + id);
        }
        return optional.get();
    }
}
