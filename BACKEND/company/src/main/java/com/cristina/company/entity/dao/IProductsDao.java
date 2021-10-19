package com.cristina.company.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.cristina.company.entity.models.Products;

public interface IProductsDao extends CrudRepository<Products, Long>{

}
