package com.nagarro.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.app.dao.ProductDAO;
import com.nagarro.app.entity.Product;

@Service
public class ProductDetailServiceImplementation implements ProductDetailService {

	private ProductDAO productDAO;
	
	@Autowired
	public ProductDetailServiceImplementation(ProductDAO productDAO) {
		this.productDAO = productDAO;
	}

	@Override
	public boolean saveProduct(Product product) {
		Optional<Product> _product = getProductByCode(product.getProductCode());
		if(_product.isEmpty()) {
			this.productDAO.save(product);
			return true;
		}
		return false;
	}
	
	@Override
	public void updateProduct(Product product) {
		this.productDAO.save(product);
	}

	@Override
	public Optional<Product> getProductByCode(long productCode) {
		return this.productDAO.findById(productCode);
	}

	@Override
	public List<Product> findProduct(String parameter) {
		List<Product> allProducts= this.getAllProducts();
		List<Product> resultProducts = new ArrayList<>();
		
		
		for(Product i:allProducts) {

			if(String.valueOf(i.getProductCode()).toLowerCase().equals(parameter.toLowerCase()) ||
					i.getProductName().toLowerCase().equals(parameter.toLowerCase())  ||
					i.getProductBrand().toLowerCase().equals(parameter.toLowerCase())) {

				resultProducts.add(i);
			}
		}
		
		return resultProducts;
	}

	
	@Override
	public List<Product> getAllProducts(){
		return this.productDAO.findAll();
	}
	
	@Override
	public void deleteProduct(long productCode) {
		this.productDAO.deleteById(productCode);
	}
}
