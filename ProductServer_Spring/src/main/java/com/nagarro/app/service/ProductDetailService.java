package com.nagarro.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nagarro.app.entity.Product;

@Service
public interface ProductDetailService {
	public boolean saveProduct(Product product);
	public void updateProduct(Product product);
	public Optional<Product> getProductByCode(long productCode);
	public List<Product> findProduct(String parameter);
	public List<Product> getAllProducts();
	public void deleteProduct(long productCode);
}
