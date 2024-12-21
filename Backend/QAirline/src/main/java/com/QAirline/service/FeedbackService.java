package com.QAirline.service;


import com.QAirline.model.Feedback;
import com.QAirline.model.User;

import java.util.List;

public interface FeedbackService {
    public Feedback createFeedback(Feedback feedback, User user);
    public List<Feedback> getAllFeedback();
    public Feedback updateFeedback(Long feedbackId, Feedback feedback) throws Exception;
    public void deleteFeedback(Long feedbackId) throws Exception;
    public Feedback findFeedbackById(Long id) throws Exception;
    public List<Feedback> getFeedbackByUser(User user);
    public List<Long> getFeedbackCountsByNumStar();
}
