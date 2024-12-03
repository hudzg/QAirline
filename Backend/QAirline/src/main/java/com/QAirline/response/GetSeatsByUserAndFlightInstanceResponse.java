package com.QAirline.response;

import com.QAirline.model.FlightInstance;
import com.QAirline.model.FlightLeg;
import com.QAirline.model.Ticket;
import com.QAirline.model.User;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class GetSeatsByUserAndFlightInstanceResponse {
    private Long id;
    private User user;
    private FlightInstance flightInstance;
    private Ticket ticket;
    private String seatNumber;
    private String citizenId;
    private String firstName;
    private String lastName;
    private String phone;
    private LocalDate dob;
    private String gender;
    private List<FlightLeg> flightLegs;
}
