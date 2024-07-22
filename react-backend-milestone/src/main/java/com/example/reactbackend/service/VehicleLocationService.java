package com.example.reactbackend.service;

import java.util.List;
import java.util.Optional;

import com.example.reactbackend.model.UserModel;

public interface VehicleLocationService {

	List<UserModel> fetchAllVehicleLocations();

	Optional<UserModel> fetchVehicleLocationById(Integer id);
	
	UserModel createUser(UserModel userModel);
	
	UserModel updateUser(UserModel userModel, int id);
	
	boolean deleteUser(int id);

}
