package com.nagarro.app.entity;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
	
	@Id
	private long productCode;
	private String productName;
	private String productBrand;
	private String productDescription;
	private Long productPrice;
	
	@Column(columnDefinition = "MEDIUMBLOB")
	private byte[] productImage;

	public Product() {
		
	}
	
	public Product(long productCode, String productName, String productBrand, String productDescription,
			long productPrice, byte[] productImage) {
		this.productCode = productCode;
		this.productName = productName;
		this.productBrand = productBrand;
		this.productDescription = productDescription;
		this.productPrice = productPrice;
		this.productImage = productImage;
	}

	public long getProductCode() {
		return productCode;
	}

	public void setProductCode(long productCode) {
		this.productCode = productCode;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductBrand() {
		return productBrand;
	}

	public void setProductBrand(String productBrand) {
		this.productBrand = productBrand;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public Long getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(Long productPrice) {
		this.productPrice = productPrice;
	}

	public byte[] getProductImage() {
		return productImage;
	}

	public void setProductImage(byte[] productImage) {
		this.productImage = productImage;
	}

	@Override
	public String toString() {
		return "Product [productCode=" + productCode + ", productName=" + productName + ", productBrand=" + productBrand
				+ ", productDescription=" + productDescription + ", productPrice=" + productPrice + ", productImage="
				+ Arrays.toString(productImage) + "]";
	}
}
