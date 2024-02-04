package com.leetcodeclone.application.models;

import lombok.Data;

@Data
public class JwtResponse {

    public JwtResponse(String token,String name)
    {
        this.jwtToken = token;
        this.username = name;
    }

    private String jwtToken;
    private String username;
}
