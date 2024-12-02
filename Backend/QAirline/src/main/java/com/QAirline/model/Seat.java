package com.QAirline.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private FlightInstance flightInstance;

    @ManyToOne
    private Ticket ticket;

    private String seatNumber;

    private String citizenId;
//    private String title;
    private String firstName;
    private String lastName;
    private String phone;
    private LocalDate dob;
    private String gender;
}
