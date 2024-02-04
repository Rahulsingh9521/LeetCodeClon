package com.leetcodeclone.application.repository;


import com.leetcodeclone.application.entity.Roles;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RolesRepository extends MongoRepository<Roles, String> {
}
