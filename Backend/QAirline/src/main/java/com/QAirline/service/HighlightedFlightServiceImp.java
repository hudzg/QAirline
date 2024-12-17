package com.QAirline.service;

import com.QAirline.model.HighlightedFlight;
import com.QAirline.repository.HighlightedFlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HighlightedFlightServiceImp implements HighlightedFlightService{
    @Autowired
    private HighlightedFlightRepository highlightedFlightRepository;
    @Override
    public HighlightedFlight createHighlightedFlight(HighlightedFlight flight) {
        HighlightedFlight createdHighlightedFlight = new HighlightedFlight();
        createdHighlightedFlight.setFlight(flight.getFlight());
        createdHighlightedFlight.setTicket(flight.getTicket());
        createdHighlightedFlight.setFlightType(flight.getFlightType());
        createdHighlightedFlight.setPriority(flight.getPriority());
        createdHighlightedFlight.setImage(flight.getImage());
        return highlightedFlightRepository.save(createdHighlightedFlight);
    }

    @Override
    public List<HighlightedFlight> getAllHighlightedFlight() {
        return highlightedFlightRepository.findAll();
    }

    @Override
    public HighlightedFlight updateHighlightedFlight(Long highlightedFlightId, HighlightedFlight flight) throws Exception {
        HighlightedFlight updatedHighlightedFlight = findHighlightedFlightById(highlightedFlightId);
        updatedHighlightedFlight.setFlight(flight.getFlight());
        updatedHighlightedFlight.setTicket(flight.getTicket());
        updatedHighlightedFlight.setFlightType(flight.getFlightType());
        updatedHighlightedFlight.setPriority(flight.getPriority());
        updatedHighlightedFlight.setImage(flight.getImage());
        return highlightedFlightRepository.save(updatedHighlightedFlight);
    }

    @Override
    public void deleteHighlightedFlight(Long highlightedFlightId) throws Exception {
        highlightedFlightRepository.deleteById(highlightedFlightId);
    }

    @Override
    public HighlightedFlight findHighlightedFlightById(Long id) throws Exception {
        Optional<HighlightedFlight> optional = highlightedFlightRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("HighlightedFlight not found with id: " + id);
        }
        return optional.get();
    }
}
