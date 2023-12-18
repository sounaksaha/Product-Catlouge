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
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.app.entity.ProductDelivery;
import com.nagarro.app.service.ProductDeliveryService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("productdelivery")
public class ProductDeliveryController {
	
	private ProductDeliveryService productDeliveryService;
	
	@Autowired
	public ProductDeliveryController(ProductDeliveryService productDeliveryService) {
		this.productDeliveryService = productDeliveryService;
	}

	@PostMapping
	public boolean addDelivery(@RequestBody ProductDelivery productDelivery) {
		return this.productDeliveryService.addDelivery(productDelivery);
	}
	
	@PostMapping("update")
	public void updateDelivery(@RequestBody ProductDelivery productDelivery) {
		this.productDeliveryService.updateDelivery(productDelivery);
	}
	
	@GetMapping
	public List<ProductDelivery> getAllDelivery() {
		return this.productDeliveryService.getAllDelivery();
	}
	
	@GetMapping("{pincode}")
	public Optional<ProductDelivery> getDelivery(@PathVariable(name="pincode") long pincode){
		return this.productDeliveryService.getDelivery(pincode);
	}
	
	@DeleteMapping("{pincode}")
	public void deleteDelivery(@PathVariable(name="pincode") long pincode) {
		this.productDeliveryService.deleteDelivery(pincode);
	}
}
