package com.QAirline.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String customerFeedback;
    private String adminResponse;

    @ManyToOne
    private FlightInstance flightInstance;

    private Long numStar;

    @ManyToOne
    private User user;
}
