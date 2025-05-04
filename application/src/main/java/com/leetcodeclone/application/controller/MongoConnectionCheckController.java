package com.leetcodeclone.application.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MongoConnectionCheckController {

    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/check-mongo")
    public String checkMongoConnection() {
        try {
            // Try running a simple query or accessing a collection
            String name = mongoTemplate.getDb().getName();
            return "MongoDB is connected!" + name;
        } catch (Exception e) {
            return "MongoDB connection failed: " + e.getMessage();
        }
    }
}
