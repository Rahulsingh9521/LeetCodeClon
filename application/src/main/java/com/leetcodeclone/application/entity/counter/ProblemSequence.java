package com.leetcodeclone.application.entity.counter;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class ProblemSequence {
    @Id
    private String id;

    private long sequenceValue;
}
