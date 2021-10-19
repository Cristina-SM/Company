package com.cristina.company.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.cristina.company.entity.models.Products;
import com.cristina.company.entity.services.IProductsService;
@CrossOrigin(origins = "http://localhost:8080/products")
@RestController
public class ProductsController {
	 @Bean
     public WebMvcConfigurer corsConfigurer() {
         return new WebMvcConfigurer() {
             @Override
             public void addCorsMappings(CorsRegistry registry) {
                 registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");
             }
         };
     }
	@Autowired
	IProductsService ProductsService;
	
	@GetMapping("/products")
	public List<Products> getAllProducts(){
		return ProductsService.getAll();
	}
	@GetMapping("/products/{id}")
	public Products getOne(@PathVariable(value ="id")long id) {
		return ProductsService.get(id);
	}

}
