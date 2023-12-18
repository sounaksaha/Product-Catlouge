package com.nagarro.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.app.dao.ProductDeliveryDAO;
import com.nagarro.app.entity.ProductDelivery;

@Service
public class ProductDeliveryServiceImplementation implements ProductDeliveryService {

	private ProductDeliveryDAO productDeliveryDAO;
	
	@Autowired
	public ProductDeliveryServiceImplementation(ProductDeliveryDAO productDeliveryDAO) {
		this.productDeliveryDAO = productDeliveryDAO;
	}

	@Override
	public boolean addDelivery(ProductDelivery productServiceAbility) {
		Optional<ProductDelivery> delivery = getDelivery(productServiceAbility.getPincode());
		if(delivery.isEmpty()) {
			this.productDeliveryDAO.save(productServiceAbility);
			return true;
		}
		return false;
	}
	
	public void updateDelivery(ProductDelivery productDelivery) {
		this.productDeliveryDAO.save(productDelivery);
	}

	@Override
	public List<ProductDelivery> getAllDelivery() {
		return this.productDeliveryDAO.findAll();
	}

	@Override
	public Optional<ProductDelivery> getDelivery(long pincode) {
		return this.productDeliveryDAO.findById(pincode);
	}
	
	@Override
	public void deleteDelivery(long pincode) {
		this.productDeliveryDAO.deleteById(pincode);
	}

}
