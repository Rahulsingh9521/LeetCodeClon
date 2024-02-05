package com.leetcodeclone.application.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Roles {

    @Id
    private String id;

    private String username;
    private Boolean User;
    private Boolean Admin;

}
