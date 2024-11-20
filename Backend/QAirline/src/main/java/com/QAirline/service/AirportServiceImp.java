package com.QAirline.service;

import com.QAirline.model.Airport;
import com.QAirline.repository.AirportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AirportServiceImp implements AirportService {
    @Autowired
    private AirportRepository airportRepository;

    @Override
    public Airport createAirport(Airport airport) {
        Airport createdAirport = new Airport();
        createdAirport.setName(airport.getName());
        createdAirport.setCity(airport.getCity());
        createdAirport.setCountry(airport.getCountry());
        createdAirport.setIATA(airport.getIATA());
        createdAirport.setEmail(airport.getEmail());
        return airportRepository.save(createdAirport);
    }

    @Override
    public List<Airport> getAllAirport() {
        return airportRepository.findAll();
    }

    @Override
    public Airport updateAirport(Long airportId, Airport airport) throws Exception {
        Airport updatedAirport = findAirportById(airportId);
        updatedAirport.setName(airport.getName());
        updatedAirport.setCity(airport.getCity());
        updatedAirport.setCountry(airport.getCountry());
        updatedAirport.setIATA(airport.getIATA());
        updatedAirport.setEmail(airport.getEmail());
        return airportRepository.save(updatedAirport);
    }

    @Override
    public void deleteAirport(Long airportId) throws Exception {
        Airport airport = findAirportById(airportId);
        airportRepository.delete(airport);
    }

    @Override
    public Airport findAirportById(Long id) throws Exception {
        Optional<Airport> optional = airportRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("airport not found with id: " + id);
        }
        return optional.get();
    }
}
