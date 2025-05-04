package com.leetcodeclone.application.service;

import com.leetcodeclone.application.entity.AuthUser;

import com.leetcodeclone.application.repository.AuthUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppUserService implements UserDetailsService {

    @Autowired
    private AuthUserRepository authUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Load user from DB (you can adapt this logic to fetch other details)
        AuthUser authUser = authUserRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));


        // You can return a Spring Security User with authorities
        return new User(authUser.getUsername(),
                authUser.getPassword(),
                List.of(new SimpleGrantedAuthority(authUser.getRole().getAdmin() ? "ROLE_ADMIN" : "ROLE_USER")));
    }



    public Optional<AuthUser> getUserByUserid(String userId){
        return  authUserRepository.findByUsername(userId);
    }


}
