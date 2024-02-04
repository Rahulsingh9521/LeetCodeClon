package com.leetcodeclone.application.repository;

import com.leetcodeclone.application.entity.AuthUser;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface AuthUserRepository extends MongoRepository<AuthUser, String> {
}

