package com.QAirline.request;

import lombok.Data;

@Data
public class ChangePasswordRequest {
    private String email;
    private String password;
    private String newPassword;
}
