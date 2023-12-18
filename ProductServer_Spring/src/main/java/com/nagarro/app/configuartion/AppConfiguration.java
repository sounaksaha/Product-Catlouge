package com.nagarro.app.configuartion;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.nagarro.app.dao.ProductDAO;
import com.nagarro.app.dao.ProductDeliveryDAO;
import com.nagarro.app.dao.UserDAO;
import com.nagarro.app.service.ProductDeliveryService;
import com.nagarro.app.service.ProductDeliveryServiceImplementation;
import com.nagarro.app.service.ProductDetailService;
import com.nagarro.app.service.ProductDetailServiceImplementation;
import com.nagarro.app.service.UserDetailService;
import com.nagarro.app.service.UserDetailServiceImplementation;


@Configuration
public class AppConfiguration {
	
	private UserDAO userDAO;
	private ProductDAO productDAO;
	private ProductDeliveryDAO productDeliveryDAO;
	
	AppConfiguration(UserDAO userDAO,ProductDAO productDAO,ProductDeliveryDAO productDeliveryDAO){
		this.userDAO = userDAO;
		this.productDAO = productDAO;
		this.productDeliveryDAO = productDeliveryDAO;
	}
	
	@Bean
	public PasswordEncoder encoder() {
	    return new BCryptPasswordEncoder();
	}
	
	@Bean
	public ProductDetailService productDetailService() {
		return new ProductDetailServiceImplementation(this.productDAO);
	}
	
	@Bean
	public ProductDeliveryService productDeliveryService() {
		return new ProductDeliveryServiceImplementation(this.productDeliveryDAO);
	}
	
	@Bean
	public UserDetailService userDetailService() {
		return new UserDetailServiceImplementation(userDAO, encoder());
	}
	
}
