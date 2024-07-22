package com.example.reactbackend.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.reactbackend.exceptions.VehicleLocationNotFound;
import com.example.reactbackend.model.UserModel;
import com.example.reactbackend.repository.UserRepository;

@Service
public class UserServiceImpl implements VehicleLocationService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<UserModel> fetchAllVehicleLocations() {
		return userRepository.findAll();
	}

	@Override
	public Optional<UserModel> fetchVehicleLocationById(Integer id) {
		UserModel userData = userRepository.findById(id)
				.orElseThrow(() -> new VehicleLocationNotFound("User Not Found"));
		return Optional.of(userData);
	}

	@Override
	public UserModel createUser(UserModel userModel) {
		userModel.setDateOfCreation(LocalDateTime.now());
		UserModel save = userRepository.save(userModel);
		return save;
	}

	@Override
	public UserModel updateUser(UserModel userModel, int id) {
	    UserModel user = userRepository.findById(id)
	        .orElseThrow(() -> new VehicleLocationNotFound("User Not Found"));

	    // Copy the fields from userModel to user, except for the id and dateOfCreation
	    user.setUserName(userModel.getUserName());
	    user.setUserRole(userModel.getUserRole());
	    user.setUserEmail(userModel.getUserEmail());
	    user.setUserStatus(userModel.getUserStatus());
	    // Keep the original dateOfCreation

	    // Save the updated user
	    return userRepository.save(user);
	}


	@Override
	public boolean deleteUser(int id) {
		// TODO Auto-generated method stub
		UserModel user = userRepository.findById(id).orElseThrow(() -> new VehicleLocationNotFound("User Not Found"));
		boolean userDeletedFlag = false;
		if (user != null) {
			userRepository.delete(user);
			userDeletedFlag=true;
		}
		return userDeletedFlag;
	}

}
