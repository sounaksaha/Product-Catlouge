package com.nagarro.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.app.entity.Product;
import com.nagarro.app.service.ProductDetailService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("product")
public class ProductController {
	
	private ProductDetailService productDetailService;
	
	@Autowired
	public ProductController(ProductDetailService productDetailService) {
		this.productDetailService = productDetailService;
	}


	@PostMapping
	public boolean addProduct(@RequestBody Product product) {
		return this.productDetailService.saveProduct(product);
	}
	
	@PostMapping("update")
	public void updateProduct(@RequestBody Product product) {
		this.productDetailService.updateProduct(product);
	}
	
	@GetMapping
	public List<Product> getProduct() {
		return this.productDetailService.getAllProducts();
	}
	
	@GetMapping("/{productCode}")
	public Optional<Product> getProductById(@PathVariable(name="productCode") long productCode) {
		return this.productDetailService.getProductByCode(productCode);
	}
	
	@DeleteMapping("/{productCode}")
	public void deleteProduct(@PathVariable(name="productCode") long productCode) {
		this.productDetailService.deleteProduct(productCode);
	}
	
	@PostMapping("/search")
	public List<Product> findProduct(@RequestBody String parameter){
		return this.productDetailService.findProduct(parameter);
	}
}
