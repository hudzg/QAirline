package com.QAirline.controller;

import com.QAirline.model.Airplane;
import com.QAirline.model.HeroBanner;
import com.QAirline.model.User;
import com.QAirline.response.MessageResponse;
import com.QAirline.service.HeroBannerService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/hero-banner")
public class AdminHeroBannerController {
    @Autowired
    private UserService userService;
    @Autowired
    private HeroBannerService heroBannerService;
    @PostMapping()
    public ResponseEntity<HeroBanner> createHeroBanner(
            @RequestBody HeroBanner heroBanner,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        HeroBanner createdHeroBanner = heroBannerService.createHeroBanner(heroBanner);

        return new ResponseEntity<>(createdHeroBanner, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<HeroBanner>> getAllHeroBanner(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<HeroBanner> heroBanners = heroBannerService.getAllHeroBanner();

        return new ResponseEntity<>(heroBanners, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HeroBanner> updateHeroBanner(
            @RequestBody HeroBanner heroBanner,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        HeroBanner updatedHeroBanner = heroBannerService.updateHeroBanner(id, heroBanner);

        return new ResponseEntity<>(updatedHeroBanner, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteAirplane(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        heroBannerService.deleteHeroBanner(id);

        MessageResponse response = new MessageResponse();
        response.setMessage("HeroBanner deleted successfully");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
