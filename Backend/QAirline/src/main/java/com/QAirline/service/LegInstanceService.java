package com.QAirline.service;

import com.QAirline.model.FlightInstance;
import com.QAirline.model.FlightLeg;
import com.QAirline.model.LegInstance;
import com.QAirline.request.CreateFlightInstanceRequest;

public interface LegInstanceService {
    public LegInstance createLegInstance(CreateFlightInstanceRequest createFlightInstanceRequest, FlightLeg flightLeg, FlightInstance savedFlightInstance);
    public LegInstance updateLegInstance(Long id, LegInstance updatedLegInstance) throws Exception;
//    public void deleteLegInstance(Long id);
    public LegInstance findLegInstanceById(Long id) throws Exception;
}
