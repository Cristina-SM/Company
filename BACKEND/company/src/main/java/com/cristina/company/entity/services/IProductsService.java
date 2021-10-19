package com.cristina.company.entity.services;

import java.util.List;

import com.cristina.company.entity.models.Products;

public interface IProductsService {
	public Products get(long id);
	public List<Products> getAll();
}
