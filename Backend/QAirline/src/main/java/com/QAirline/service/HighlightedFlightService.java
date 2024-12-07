package com.QAirline.service;

import com.QAirline.model.HighlightedFlight;

import java.util.List;

public interface HighlightedFlightService {
    public HighlightedFlight createHighlightedFlight(HighlightedFlight flight);
    public List<HighlightedFlight> getAllHighlightedFlight();
    public HighlightedFlight updateHighlightedFlight(Long highlightedFlightId, HighlightedFlight flight) throws Exception;
    public void deleteHighlightedFlight(Long highlightedFlightId) throws Exception;
    public HighlightedFlight findHighlightedFlightById(Long id) throws Exception;
}
