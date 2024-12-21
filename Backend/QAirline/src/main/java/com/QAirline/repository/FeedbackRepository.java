package com.QAirline.repository;

import com.QAirline.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByUserId(Long userId);
    @Query("SELECT f.numStar, COUNT(f) FROM Feedback f GROUP BY f.numStar")
    List<Object[]> countFeedbacksByNumStar();
}
