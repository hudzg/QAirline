package com.QAirline.request;

import com.QAirline.model.Ticket;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CreateSeatRequest {
    private Long flightId;
    private LocalDate date;
    private Ticket ticket;
    private String seatNumber;

    private String citizenId;
    private String title;
    private String firstName;
    private String lastName;
    private String phone;
    private LocalDate dob;
    private String gender;
}
