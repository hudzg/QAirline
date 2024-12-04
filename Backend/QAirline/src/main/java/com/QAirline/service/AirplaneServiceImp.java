package com.QAirline.service;

import com.QAirline.model.Airplane;
import com.QAirline.repository.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AirplaneServiceImp implements AirplaneService{
    @Autowired
    AirplaneRepository airplaneRepository;
    @Override
    public Airplane createAirplane(Airplane airplane) {
        Airplane createdAirplane = new Airplane();
        createdAirplane.setModel(airplane.getModel());
        createdAirplane.setEconomyCapacity(airplane.getEconomyCapacity());
        createdAirplane.setBusinessCapacity(airplane.getBusinessCapacity());
        createdAirplane.setFirstClassCapacity(airplane.getFirstClassCapacity());
        createdAirplane.setFirstClassRow(airplane.getFirstClassRow());
        createdAirplane.setFirstClassCol(airplane.getFirstClassCol());
        createdAirplane.setBusinessRow(airplane.getBusinessRow());
        createdAirplane.setBusinessCol(airplane.getBusinessCol());
        createdAirplane.setEconomyRow(airplane.getEconomyRow());
        createdAirplane.setEconomyCol(airplane.getEconomyCol());
        return airplaneRepository.save(createdAirplane);
    }

    @Override
    public List<Airplane> getAllAirplane() {
        return airplaneRepository.findAll();
    }

    @Override
    public Airplane updateAirplane(Long airplaneId, Airplane airplane) throws Exception {
        Airplane updatedAirplane = findAirplaneById(airplaneId);
        updatedAirplane.setModel(airplane.getModel());
        updatedAirplane.setEconomyCapacity(airplane.getEconomyCapacity());
        updatedAirplane.setBusinessCapacity(airplane.getBusinessCapacity());
        updatedAirplane.setFirstClassCapacity(airplane.getFirstClassCapacity());
        updatedAirplane.setFirstClassRow(airplane.getFirstClassRow());
        updatedAirplane.setFirstClassCol(airplane.getFirstClassCol());
        updatedAirplane.setBusinessRow(airplane.getBusinessRow());
        updatedAirplane.setBusinessCol(airplane.getBusinessCol());
        updatedAirplane.setEconomyRow(airplane.getEconomyRow());
        updatedAirplane.setEconomyCol(airplane.getEconomyCol());
        return airplaneRepository.save(updatedAirplane);
    }

    @Override
    public void deleteAirplane(Long airplaneId) throws Exception {
        airplaneRepository.deleteById(airplaneId);
    }

    @Override
    public Airplane findAirplaneById(Long id) throws Exception {
        Optional<Airplane> optional = airplaneRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("airplane not found with id: " + id);
        }
        return optional.get();
    }
}
