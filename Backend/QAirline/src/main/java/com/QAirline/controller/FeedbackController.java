package com.QAirline.controller;

import com.QAirline.model.Feedback;
import com.QAirline.model.User;

import com.QAirline.service.FeedbackService;
import com.QAirline.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
    @Autowired
    private UserService userService;
    @Autowired
    private FeedbackService feedbackService;

    @PostMapping()
    public ResponseEntity<Feedback> createFeedback(
            @RequestBody Feedback feedback,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Feedback createdFeedback = feedbackService.createFeedback(feedback, user);
//        System.out.println(feedback);

        return new ResponseEntity<>(createdFeedback, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Feedback>> getAllFeedback(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Feedback> feedbacks = feedbackService.getAllFeedback();

        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Feedback> updateFeedback(
            @RequestBody Feedback feedback,
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Feedback updatedfeedback = feedbackService.updateFeedback(id, feedback);

        return new ResponseEntity<>(updatedfeedback, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Feedback>> getFeedbackByUser(
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Feedback> feedbacks = feedbackService.getFeedbackByUser(user);

        return new ResponseEntity<>(feedbacks, HttpStatus.OK);
    }
}
