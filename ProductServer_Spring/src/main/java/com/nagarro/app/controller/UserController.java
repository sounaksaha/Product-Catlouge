package com.nagarro.app.controller;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.app.entity.User;
import com.nagarro.app.service.UserDetailService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	private UserDetailService userDetails;
	
	@Autowired
	public UserController(UserDetailService userDetails) {
		this.userDetails = userDetails;
	}
	
	@PostMapping("/login")
	public User isAuthentication(@RequestBody User user) {
		return this.userDetails.getRole(user.getEmail());
	}
	
	
	@PostMapping(value = "/register")
	public boolean saveUser(@RequestBody User user) {
		return this.userDetails.saveDetails(user);
	}
	
	@GetMapping("/user")
	public List<User> getAllUser(){
		return this.userDetails.getallDetails();
	}
}
