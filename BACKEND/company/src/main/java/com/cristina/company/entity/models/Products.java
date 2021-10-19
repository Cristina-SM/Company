package com.cristina.company.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Products implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String Name;
	private String Description;
	private int Price;
	private int lot;
	private String image;
	private int Cod_Products;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public int getPrice() {
		return Price;
	}
	public void setPrice(int price) {
		Price = price;
	}
	public int getLot() {
		return lot;
	}
	public void setLot(int lot) {
		this.lot = lot;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getCod_Products() {
		return Cod_Products;
	}
	public void setCod_Products(int cod_Products) {
		Cod_Products = cod_Products;
	}
	
	public Products(long id, String name, String description, int price, int lot, String image, int cod_Products) {
		super();
		this.id = id;
		Name = name;
		Description = description;
		Price = price;
		this.lot = lot;
		this.image = image;
		Cod_Products = cod_Products;
	}
	public Products(){
	}

}
