package com.QAirline.service;

import com.QAirline.model.User;

public interface UserService {
    public User findUserByJwtToken(String jwt) throws Exception;
    public User findUserByEmail(String email) throws Exception;
    public Long countUsers();
}
