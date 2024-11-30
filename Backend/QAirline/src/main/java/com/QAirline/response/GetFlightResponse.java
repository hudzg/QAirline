package com.QAirline.response;

import com.QAirline.model.Ticket;
import lombok.Data;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class GetFlightResponse {
    private Long flightId;
    private LocalTime departureTime;
    private LocalTime arrivalTime;
    private Long hourDuration;
    private Long minuteDuration;
    private List<Ticket> tickets = new ArrayList<>();
}
