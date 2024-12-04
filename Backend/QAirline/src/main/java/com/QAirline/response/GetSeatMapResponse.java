package com.QAirline.response;

import com.QAirline.model.Airplane;
import com.QAirline.model.Seat;
import lombok.Data;

import java.util.List;

@Data
public class GetSeatMapResponse {
    private Airplane airplane;
    private List<Seat> seats;
}
