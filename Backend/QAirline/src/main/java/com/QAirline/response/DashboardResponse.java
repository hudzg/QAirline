package com.QAirline.response;

import lombok.Data;

import java.util.List;

@Data
public class DashboardResponse {
    private Long numUser;
    private Long numAirport;
    private Long numAirplane;
    private Long numFeedback;
    private Long revenue;
    private List<Long> feedbacks;
    private List<Long> seats;
    private List<Long> flights;
}
