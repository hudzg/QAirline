package com.QAirline.service;

import com.QAirline.model.Airplane;

import java.util.List;

public interface AirplaneService {
    public Airplane createAirplane(Airplane airplane);
    public List<Airplane> getAllAirplane();
    public Airplane updateAirplane(Long airplaneId, Airplane airplane) throws Exception;
    public void deleteAirplane(Long airplaneId) throws Exception;
    public Airplane findAirplaneById(Long id) throws Exception;
}
