package com.leetcodeclone.application.service;

import com.leetcodeclone.application.entity.AuthUser;
import com.leetcodeclone.application.entity.Roles;
import com.leetcodeclone.application.entity.UserRegistrationDTO;
import com.leetcodeclone.application.repository.AuthUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CreateUserService {

    @Autowired
    private AuthUserRepository authUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String createUser(UserRegistrationDTO user){
        Optional<AuthUser> authUser = authUserRepository.findByUsername(user.getUsername());

//        String authUserName = authUser.map(AuthUser::getUsername)
//                .orElseThrow(() -> new RuntimeException("User not found"));

        if(authUser.isPresent()){
            return "User Already Exists!!";
        }

        Roles newUserRole = new Roles();
        newUserRole.setUsername(user.getUsername());
        newUserRole.setAdmin(user.getIsAdim());

        AuthUser newUser = new AuthUser();
        newUser.setActive(true);
//      passwordEncoder.encode(user.getPassword()
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setUsername(user.getUsername());
        newUser.setRole(newUserRole);


        authUserRepository.save(newUser);
        return "User Created Successfully !";
    }
}
