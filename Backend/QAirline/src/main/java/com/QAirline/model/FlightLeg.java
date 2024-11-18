package com.QAirline.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlightLeg {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Airport departureAirport;
    @ManyToOne
    private Airport arrivalAirport;

    private LocalTime departureTime;
    private LocalTime arrivalTime;

    @ManyToOne
    @JsonIgnore
    private Flight flight;

    @ManyToOne
    private Airplane airplane;

    @JsonIgnore
    @OneToMany(mappedBy = "flightLeg", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<LegInstance> legInstances = new ArrayList<>();
}
