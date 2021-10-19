package com.cristina.company.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cristina.company.entity.dao.IWorkerDao;
import com.cristina.company.entity.models.Workers;

@Service
public class WorkersServiceImp implements IWorkersService{
	@Autowired
	private IWorkerDao WorkerDao;
	@Override
	public Workers get(long id) {
		return WorkerDao.findById(id).get();
	}
	@Override
	public List<Workers> getAll() {
		return (List<Workers>) WorkerDao.findAll();
	}


}
