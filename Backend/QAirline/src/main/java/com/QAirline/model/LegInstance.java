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

    private Airport departureAirport;
    private Airport arrivalAirport;

    private LocalTime departureTime;
    private LocalTime arrivalTime;

    private Long firstClassAmount;
    private Long businessAmount;
    private Long economyAmount;

    @ManyToOne
    @JsonIgnore
    private FlightLeg flightLeg;

    @ManyToOne
    private Airplane airplane;

    @JsonIgnore
    @OneToMany(mappedBy = "leg_instance", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Seat> seats = new ArrayList<>();
}
