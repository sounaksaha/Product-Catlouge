package com.nagarro.app.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nagarro.app.dao.UserDAO;
import com.nagarro.app.entity.User;

@Primary
@Service
public class UserDetailServiceImplementation implements UserDetailService {

	private UserDAO userDAO;

	private PasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	public UserDetailServiceImplementation(UserDAO userDAO,PasswordEncoder bCryptPasswordEncoder) {
		this.userDAO = userDAO;
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}

	@Override
	public boolean saveDetails(User user) {

		if (isUserExists(user.getEmail())) {
			return false;
		}
		
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		this.userDAO.save(user);
		return true;
	}

	@Override
	public List<User> getallDetails() {
		return this.userDAO.findAll();
	}

	@Override
	public User getRole(String email) {
		User user = this.userDAO.getByEmail(email);
		if (user != null) {
			return user;
		}
		return null;
	}

	@Override
	public boolean isUserExists(String email) {
		User user = this.userDAO.getByEmail(email);
		if (user != null) {
			return true;
		}
		return false;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		User user = userDAO.getByEmail(username);
		
		if (user == null) {
			throw new UsernameNotFoundException("Found 404");
		}

		return new UserPrincipal(user);
	}
	
}
