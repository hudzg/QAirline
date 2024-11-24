package com.QAirline.request;

import com.QAirline.model.Flight;
import com.QAirline.model.FlightInstance;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CreateFlightInstanceRequest {
    private Flight flight;
    private LocalDate date;
}
