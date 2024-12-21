package com.QAirline.service;

import com.QAirline.model.FlightInstance;
import com.QAirline.model.User;
import com.QAirline.request.CreateFlightInstanceRequest;
import com.QAirline.response.GetFlightInstanceByUserResponse;

import java.util.List;

public interface FlightInstanceService {
    public FlightInstance createFlightInstance(CreateFlightInstanceRequest createFlightInstanceRequest);
    public List<FlightInstance> getAllFlightInstance();
    public FlightInstance updateFlightInstance(Long id, FlightInstance flightInstance) throws Exception;
    public FlightInstance findFLightInstanceById(Long id) throws Exception;

    public List<GetFlightInstanceByUserResponse> getFlightInstanceByUser(User user);
}
