package com.nagarro.app.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.app.entity.ProductDelivery;

public interface ProductDeliveryDAO extends JpaRepository<ProductDelivery, Long> {
}
