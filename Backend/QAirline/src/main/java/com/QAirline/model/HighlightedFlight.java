package com.QAirline.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class HighlightedFlight {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Flight flight;

    @ManyToOne
    private Ticket ticket;

    private String flightType;
    private Long priority;
    private String image;
}
