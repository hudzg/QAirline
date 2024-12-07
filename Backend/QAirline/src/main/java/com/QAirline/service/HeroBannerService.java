package com.QAirline.service;

import com.QAirline.model.HeroBanner;

import java.util.List;

public interface HeroBannerService {
    public HeroBanner createHeroBanner(HeroBanner heroBanner);
    public List<HeroBanner> getAllHeroBanner();
    public HeroBanner updateHeroBanner(Long heroBannerId, HeroBanner heroBanner) throws Exception;
    public void deleteHeroBanner(Long heroBannerId) throws Exception;
    public HeroBanner findHeroBannerById(Long id) throws Exception;
}
