package com.nagarro.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ProductDelivery {

	@Id
	private long pincode;
	private long days;

	public ProductDelivery() {
		
	}
	
	public ProductDelivery(long pincode,long days) {
		this.pincode = pincode;
		this.days = days;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public long getDays() {
		return days;
	}

	public void setDays(long days) {
		this.days = days;
	}

	@Override
	public String toString() {
		return "ProductDelivery [pincode=" + pincode + ", days=" + days + "]";
	}

}
