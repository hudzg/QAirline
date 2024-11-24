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
public class FlightInstance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private LocalDate date;

    @ManyToOne
    @JsonIgnore
    private Flight flight;

    @JsonIgnore
    @OneToMany(mappedBy = "flightInstance", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<LegInstance> legInstances = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "flightInstance", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Seat> seats = new ArrayList<>();
}
