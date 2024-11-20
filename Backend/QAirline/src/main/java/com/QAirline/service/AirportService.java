package com.QAirline.service;

import com.QAirline.model.Airport;

import java.util.List;

public interface AirportService {
    public Airport createAirport(Airport airport);
    public List<Airport> getAllAirport();
    public Airport updateAirport(Long airportId, Airport airport) throws Exception;
    public void deleteAirport(Long airportId) throws Exception;
    public Airport findAirportById(Long id) throws Exception;
}
