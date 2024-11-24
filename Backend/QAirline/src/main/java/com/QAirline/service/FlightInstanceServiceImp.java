package com.QAirline.service;

import com.QAirline.model.Flight;
import com.QAirline.model.FlightInstance;
import com.QAirline.model.FlightLeg;
import com.QAirline.model.LegInstance;
import com.QAirline.repository.FlightInstanceRepository;
import com.QAirline.repository.LegInstanceRepository;
import com.QAirline.request.CreateFlightInstanceRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FlightInstanceServiceImp implements FlightInstanceService {
    @Autowired
    FlightInstanceRepository flightInstanceRepository;
    @Autowired
    LegInstanceService legInstanceService;

    @Override
    public FlightInstance createFlightInstance(CreateFlightInstanceRequest createFlightInstanceRequest) {
        FlightInstance flightInstance = new FlightInstance();
        flightInstance.setFlight(createFlightInstanceRequest.getFlight());
        flightInstance.setDate(createFlightInstanceRequest.getDate());

        FlightInstance savedFlightInstance = flightInstanceRepository.save(flightInstance);

        for(FlightLeg flightLeg : createFlightInstanceRequest.getFlight().getFlightLegs()) {
            LegInstance legInstance = legInstanceService.createLegInstance(createFlightInstanceRequest, flightLeg, savedFlightInstance);
            savedFlightInstance.getLegInstances().add(legInstance);
        }

        createFlightInstanceRequest.getFlight().getFlightInstances().add(savedFlightInstance);

        return savedFlightInstance;
    }

    @Override
    public List<FlightInstance> getAllFlightInstance() {
        return flightInstanceRepository.findAll();
    }

//    @Override
//    public FlightInstance updateFlightInstance(Long id, FlightInstance flightInstance) {
//        return null;
//    }

    @Override
    public FlightInstance findFLightInstanceById(Long id) throws Exception {
        Optional<FlightInstance> optional = flightInstanceRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("FlightInstance not found with id: " + id);
        }
        return optional.get();
    }
}
