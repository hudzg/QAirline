package com.QAirline.request;

import com.QAirline.model.TICKET_CLASS;
import lombok.Data;

@Data
public class CreateTicketRequest {
    private TICKET_CLASS ticketClass;
    private Long amount;
    private Long price;

    private boolean refund;
    private Double checkedBaggage;
    private Double carryOnBaggage;

    private Long flightId;
}
