package com.cristina.company.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.cristina.company.entity.models.Workers;

public interface IWorkerDao extends CrudRepository<Workers, Long> {

}
