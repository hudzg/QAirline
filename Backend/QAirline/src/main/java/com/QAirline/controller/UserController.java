package com.QAirline.controller;

import com.QAirline.model.Airplane;
import com.QAirline.model.User;
import com.QAirline.request.UpdateImageRequest;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {


    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<User> findUserByJwtToken(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping("/image")
    public ResponseEntity<User> updateImage(@RequestHeader("Authorization") String jwt,
                                            @RequestBody UpdateImageRequest updateImageRequest) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        userService.updateImage(user, updateImageRequest.getImage());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
