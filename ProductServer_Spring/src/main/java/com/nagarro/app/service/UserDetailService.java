package com.nagarro.app.service;

import java.util.List;


import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.nagarro.app.entity.User;

@Service
public interface UserDetailService extends UserDetailsService{
	public boolean saveDetails(User user);
	public List<User> getallDetails();
	public User getRole(String email);
	public boolean isUserExists(String email);
}
