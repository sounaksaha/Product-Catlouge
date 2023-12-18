package com.nagarro.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nagarro.app.entity.ProductDelivery;

@Service
public interface ProductDeliveryService {
	public boolean addDelivery(ProductDelivery productDelivery);
	public void updateDelivery(ProductDelivery productDelivery);
	public List<ProductDelivery> getAllDelivery();
	public Optional<ProductDelivery> getDelivery(long pincode);
	public void deleteDelivery(long pincode);
}
