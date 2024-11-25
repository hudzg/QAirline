package com.QAirline.request;

import com.QAirline.model.Airport;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class GetFlightRequest {
    private Airport departureAirport;
    private Airport arrivalAirport;

    private LocalDate departureTime;
}
