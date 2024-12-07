package com.QAirline.response;

import com.QAirline.model.Airplane;
import com.QAirline.model.Airport;
import com.QAirline.model.Ticket;
import lombok.Data;

import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

class FlightLegResponse {
    private Long id;
    private Airport departureAirport;
    private Airport arrivalAirport;
    private ZonedDateTime departureDateTime;
    private ZonedDateTime arrivalDateTime;
    private Airplane airplane;
    private Long hourDuration;
    private Long minuteDuration;
    private Long hourDurationToNext;
    private Long minuteDurationToNext;
}

@Data
public class GetFlightResponse {
    private Long flightId;
    private LocalTime departureTime;
    private LocalTime arrivalTime;
    private Long hourDuration;
    private Long minuteDuration;
    private List<Ticket> tickets = new ArrayList<>();
}
