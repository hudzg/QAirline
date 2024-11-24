package com.QAirline.service;

import com.QAirline.model.FlightInstance;
import com.QAirline.request.CreateFlightInstanceRequest;

import java.util.List;

public interface FlightInstanceService {
    public FlightInstance createFlightInstance(CreateFlightInstanceRequest createFlightInstanceRequest);
    public List<FlightInstance> getAllFlightInstance();
//    public FlightInstance updateFlightInstance(Long id, FlightInstance flightInstance);
    public FlightInstance findFLightInstanceById(Long id) throws Exception;
}
