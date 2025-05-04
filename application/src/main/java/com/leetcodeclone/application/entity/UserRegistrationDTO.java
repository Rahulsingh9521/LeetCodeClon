package com.leetcodeclone.application.entity;

import lombok.Data;

@Data
public class UserRegistrationDTO {

    private String username;
    private String password;
    private Boolean isAdim;
}
