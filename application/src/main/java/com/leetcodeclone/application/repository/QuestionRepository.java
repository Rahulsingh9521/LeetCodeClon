package com.leetcodeclone.application.repository;

import com.leetcodeclone.application.entity.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepository extends MongoRepository<Question, String> {
}
