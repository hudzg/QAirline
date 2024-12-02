package com.QAirline.response;

import com.QAirline.model.Airport;
import com.QAirline.model.FlightInstance;
import lombok.Data;

import java.time.LocalTime;

@Data
public class GetFlightInstanceByUserResponse {
    private FlightInstance flightInstance;
    private Airport departureAirport;
    private Airport arrivalAirport;
    private LocalTime departureTime;
    private LocalTime arrivalTime;
    private Long hourDuration;
    private Long minuteDuration;
}
