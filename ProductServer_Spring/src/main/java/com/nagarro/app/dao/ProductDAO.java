package com.nagarro.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.app.entity.Product;

public interface ProductDAO extends JpaRepository<Product, Long> {
	public List<Product> getByProductName(String productName);
	public List<Product> getByProductBrand(String productBrand);
}
