package com.QAirline.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private TICKET_CLASS ticketClass;
    private Long amount;
    private Long price;

    private boolean refund;
    private Double checkedBaggage;
    private Double carryOnBaggage;

    @ManyToOne
    private Flight flight;
}
