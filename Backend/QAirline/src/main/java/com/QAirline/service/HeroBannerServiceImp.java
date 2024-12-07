package com.QAirline.service;

import com.QAirline.model.HeroBanner;
import com.QAirline.repository.HeroBannerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HeroBannerServiceImp implements HeroBannerService{
    @Autowired
    HeroBannerRepository heroBannerRepository;
    @Override
    public HeroBanner createHeroBanner(HeroBanner heroBanner) {
        HeroBanner createdHeroBanner = new HeroBanner();
        createdHeroBanner.setTitle(heroBanner.getTitle());
        createdHeroBanner.setDescription(heroBanner.getDescription());
        createdHeroBanner.setImage(heroBanner.getImage());
        createdHeroBanner.setLink(heroBanner.getLink());
        createdHeroBanner.setPriority(heroBanner.getPriority());
        return heroBannerRepository.save(createdHeroBanner);
    }

    @Override
    public List<HeroBanner> getAllHeroBanner() {
        return heroBannerRepository.findAll();
    }

    @Override
    public HeroBanner updateHeroBanner(Long heroBannerId, HeroBanner heroBanner) throws Exception {
        HeroBanner updatedHeroBanner = findHeroBannerById(heroBannerId);
        updatedHeroBanner.setTitle(heroBanner.getTitle());
        updatedHeroBanner.setDescription(heroBanner.getDescription());
        updatedHeroBanner.setImage(heroBanner.getImage());
        updatedHeroBanner.setLink(heroBanner.getLink());
        updatedHeroBanner.setPriority(heroBanner.getPriority());
        return heroBannerRepository.save(updatedHeroBanner);
    }

    @Override
    public void deleteHeroBanner(Long heroBannerId) throws Exception {
        heroBannerRepository.deleteById(heroBannerId);
    }

    @Override
    public HeroBanner findHeroBannerById(Long id) throws Exception {
        Optional<HeroBanner> optional = heroBannerRepository.findById(id);
        if (optional.isEmpty()) {
            throw new Exception("HeroBanner not found with id: " + id);
        }
        return optional.get();
    }
}
