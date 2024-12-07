package com.QAirline.controller;

import com.QAirline.model.HeroBanner;
import com.QAirline.model.User;
import com.QAirline.service.HeroBannerService;
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
@RequestMapping("/hero-banner")
public class HeroBannerController {
    @Autowired
    private UserService userService;
    @Autowired
    private HeroBannerService heroBannerService;
    @GetMapping()
    public ResponseEntity<List<HeroBanner>> getAllHeroBanner(
//            @RequestHeader("Authorization") String jwt
    ) throws Exception {
//        User user = userService.findUserByJwtToken(jwt);
        List<HeroBanner> heroBanners = heroBannerService.getAllHeroBanner();

        return new ResponseEntity<>(heroBanners, HttpStatus.OK);
    }
}
