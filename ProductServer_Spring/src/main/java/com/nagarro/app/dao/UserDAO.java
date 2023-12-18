package com.nagarro.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.app.entity.User;

public interface UserDAO extends JpaRepository<User, Long> {
	public User getByEmail(String email);
}
