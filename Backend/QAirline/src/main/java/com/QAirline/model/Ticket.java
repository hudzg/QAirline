package com.QAirline.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore
    @ManyToOne
    private Flight flight;
}
