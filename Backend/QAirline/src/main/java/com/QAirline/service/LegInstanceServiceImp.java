package com.QAirline.service;

import com.QAirline.model.Flight;
import com.QAirline.model.FlightInstance;
import com.QAirline.model.FlightLeg;
import com.QAirline.model.LegInstance;
import com.QAirline.repository.LegInstanceRepository;
import com.QAirline.request.CreateFlightInstanceRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LegInstanceServiceImp implements LegInstanceService{

    @Autowired
    LegInstanceRepository legInstanceRepository;

    @Override
    public LegInstance createLegInstance(CreateFlightInstanceRequest createFlightInstanceRequest, FlightLeg flightLeg, FlightInstance savedFlightInstance) {
        LegInstance legInstance = new LegInstance();
        legInstance.setDate(createFlightInstanceRequest.getDate());
        legInstance.setDepartureAirport(flightLeg.getDepartureAirport());
        legInstance.setArrivalAirport(flightLeg.getArrivalAirport());
        legInstance.setDepartureTime(flightLeg.getDepartureTime());
        legInstance.setArrivalTime(flightLeg.getArrivalTime());
        legInstance.setFlightLeg(flightLeg);
        legInstance.setAirplane(flightLeg.getAirplane());
        legInstance.setFlightInstance(savedFlightInstance);
        return legInstanceRepository.save(legInstance);
    }

    @Override
    public LegInstance updateLegInstance(Long id, LegInstance updatedLegInstance) throws Exception {
        LegInstance legInstance = findLegInstanceById(id);
//        legInstance.setDate(updatedLegInstance.getDate());
//        legInstance.setDepartureAirport(updatedLegInstance.getDepartureAirport());
//        legInstance.setArrivalAirport(updatedLegInstance.getArrivalAirport());
        legInstance.setDepartureTime(updatedLegInstance.getDepartureTime());
        legInstance.setArrivalTime(updatedLegInstance.getArrivalTime());
//        legInstance.setFlightLeg(updatedLegInstance.getFlightLeg());
//        legInstance.setAirplane(updatedLegInstance.getAirplane());
//        legInstance.setFlightInstance(updatedLegInstance.getFlightInstance());
        legInstance.setStatus(updatedLegInstance.getStatus());
        return legInstanceRepository.save(legInstance);
    }

    @Override
    public LegInstance findLegInstanceById(Long id) throws Exception {

        Optional<LegInstance> optional = legInstanceRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("LegInstance not found with id: " + id);
        }
        return optional.get();
    }
}
