package com.QAirline.service;

import com.QAirline.model.Flight;
import com.QAirline.model.FlightLeg;

public interface FlightLegService {
    public FlightLeg createFlightLeg(FlightLeg createdFlightLeg, Flight flight);
    public FlightLeg updateFlightLeg(Long id, FlightLeg updatedFlightLeg) throws Exception;
    public void deleteFlightLeg(Long id);
    public FlightLeg findFlightLegById(Long id) throws Exception;
}
