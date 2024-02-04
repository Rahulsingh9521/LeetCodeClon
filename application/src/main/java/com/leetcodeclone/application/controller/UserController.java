package com.leetcodeclone.application.controller;

import com.leetcodeclone.application.entity.AuthUser;
import com.leetcodeclone.application.repository.AuthUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
public class UserController {

	private final AuthUserRepository userRepository;

	@GetMapping("/user")
	public List<AuthUser> getUsers(){
		return userRepository.findAll();
	}

	@GetMapping("/checkAuth")
	public String checAuth(){
		return "You are in!!";
	}

	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody AuthUser user){
		userRepository.save(user);
		return ResponseEntity.status(HttpStatus.CREATED).body("User Created!");
//		try{
//			if(userRepository.findByUsername(user.getUsername()).isPresent()){
//				return ResponseEntity.status(HttpStatus.CONFLICT).body("User Already there please try with other user name");
//			}
//
//			user.setId(UUID.randomUUID().toString().split("-")[0]);
//			userRepository.save(user);
//
//			return ResponseEntity.status(HttpStatus.CREATED).body("User Created!");
//		}
//		catch (Exception error){
//			return ResponseEntity.internalServerError().body(error.getMessage());
//		}
	}
	
}
