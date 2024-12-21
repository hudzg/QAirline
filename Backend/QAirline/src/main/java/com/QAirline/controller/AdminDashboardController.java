package com.QAirline.controller;

import com.QAirline.model.Airplane;
import com.QAirline.model.User;
import com.QAirline.response.DashboardResponse;
import com.QAirline.service.DashboardService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/dashboard")
public class AdminDashboardController {
    @Autowired
    private UserService userService;
    @Autowired
    private DashboardService dashboardService;

    @GetMapping()
    public ResponseEntity<DashboardResponse> getDashboard(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        DashboardResponse response =  dashboardService.getDashboard();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
