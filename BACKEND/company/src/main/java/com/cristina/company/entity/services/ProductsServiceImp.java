package com.cristina.company.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cristina.company.entity.dao.IProductsDao;
import com.cristina.company.entity.models.Products;

@Service
public class ProductsServiceImp implements IProductsService {
	
	@Autowired
	private IProductsDao ProductsDao;
	
	@Override
	public Products get(long id) {
		return ProductsDao.findById(id).get();
	}

	@Override
	public List<Products> getAll() {
		return (List<Products>) ProductsDao.findAll();
	}

}
