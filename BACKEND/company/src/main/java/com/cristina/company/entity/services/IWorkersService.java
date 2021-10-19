package com.cristina.company.entity.services;

import java.util.List;

import com.cristina.company.entity.models.Workers;

public interface IWorkersService {
	public Workers get(long id);
	public List<Workers> getAll();
}
