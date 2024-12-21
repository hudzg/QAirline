package com.QAirline.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class LegInstance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private LocalDate date;

    @ManyToOne
    private Airport departureAirport;
    @ManyToOne
    private Airport arrivalAirport;

    private LocalTime departureTime;
    private LocalTime arrivalTime;

    @ManyToOne
    @JsonIgnore
    private FlightLeg flightLeg;

    @ManyToOne
    private Airplane airplane;

    @ManyToOne
    @JsonIgnore
    private FlightInstance flightInstance;

    private String status;
}
