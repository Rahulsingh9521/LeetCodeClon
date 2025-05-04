package com.leetcodeclone.application.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
@Data
public class Question {

    @Id
    @Indexed(unique = true)
    private String id;

    private String problem;

    public String getId() {
        return id;
    }

    public String getProblem() {
        return problem;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setProblem(String problem) {
        this.problem = problem;
    }
}

