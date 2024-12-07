package com.QAirline.service;

import com.QAirline.model.Feedback;
import com.QAirline.model.User;
import com.QAirline.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackServiceImp implements FeedbackService{
    @Autowired
    private FeedbackRepository feedbackRepository;
    @Override
    public Feedback createFeedback(Feedback feedback, User user) {
        Feedback createdFeedback = new Feedback();
        createdFeedback.setCustomerFeedback(feedback.getCustomerFeedback());
        createdFeedback.setAdminResponse(feedback.getAdminResponse());
        createdFeedback.setFlightInstance(feedback.getFlightInstance());
        createdFeedback.setNumStar(feedback.getNumStar());
        createdFeedback.setUser(user);
        return feedbackRepository.save(createdFeedback);
    }

    @Override
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }

    @Override
    public Feedback updateFeedback(Long feedbackId, Feedback feedback) throws Exception {
        Feedback updatedFeedback = findFeedbackById(feedbackId);
//        updatedFeedback.setCustomerFeedback(feedback.getCustomerFeedback());
        updatedFeedback.setAdminResponse(feedback.getAdminResponse());
//        updatedFeedback.setFlightInstance(feedback.getFlightInstance());
//        updatedFeedback.setNumStar(feedback.getNumStar());
//        updatedFeedback.setUser(feedback.getUser());
        return feedbackRepository.save(updatedFeedback);
    }

    @Override
    public void deleteFeedback(Long feedbackId) throws Exception {
        feedbackRepository.deleteById(feedbackId);
    }

    @Override
    public Feedback findFeedbackById(Long id) throws Exception {
        Optional<Feedback> optional = feedbackRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("feedback not found with id: " + id);
        }
        return optional.get();
    }

    @Override
    public List<Feedback> getFeedbackByUser(User user) {
        return feedbackRepository.findByUserId(user.getId());
    }
}
