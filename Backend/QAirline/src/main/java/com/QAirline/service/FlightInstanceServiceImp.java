package com.QAirline.service;

import com.QAirline.model.*;
import com.QAirline.repository.FlightInstanceRepository;
import com.QAirline.repository.LegInstanceRepository;
import com.QAirline.request.CreateFlightInstanceRequest;
import com.QAirline.response.GetFlightInstanceByUserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.ArrayList;
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

    @Override
    public List<GetFlightInstanceByUserResponse> getFlightInstanceByUser(User user) {
        List<GetFlightInstanceByUserResponse> responseList = new ArrayList<>();
        List<FlightInstance> flightInstances = flightInstanceRepository.findFlightInstancesByUserId(user.getId());
        for(FlightInstance flightInstance : flightInstances) {
            GetFlightInstanceByUserResponse response = new GetFlightInstanceByUserResponse();
            response.setFlightInstance(flightInstance);
            response.setDepartureAirport(flightInstance.getFlight().getFlightLegs().get(0).getDepartureAirport());
            response.setArrivalAirport(flightInstance.getFlight().getFlightLegs().get(flightInstance.getFlight().getFlightLegs().size() - 1).getArrivalAirport());
            response.setDepartureTime(flightInstance.getFlight().getFlightLegs().get(0).getDepartureTime());
            response.setArrivalTime(flightInstance.getFlight().getFlightLegs().get(flightInstance.getFlight().getFlightLegs().size() - 1).getArrivalTime());
            response.setHourDuration((long) Duration.between(response.getDepartureTime(), response.getArrivalTime()).toHoursPart());
            response.setMinuteDuration((long) Duration.between(response.getDepartureTime(), response.getArrivalTime()).toMinutesPart());
            responseList.add(response);
        }
        return responseList;
    }
}
