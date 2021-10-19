package com.cristina.company.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cristina.company.entity.models.Workers;
import com.cristina.company.entity.services.IWorkersService;

@CrossOrigin(origins = "http://localhost:8080/workers")
@RestController
public class WorkersController {
	@Autowired
	IWorkersService WorkerService;
	
	@GetMapping("/workers")
	public List<Workers> getAllProducts(){
		return WorkerService.getAll();
	}
	@GetMapping("/workers/{id}")
	public Workers getOne(@PathVariable(value ="id")long id) {
		return WorkerService.get(id);
	}

}