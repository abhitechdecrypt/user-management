package com.example.reactbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.reactbackend.exceptions.VehicleLocationNotFound;
import com.example.reactbackend.model.UserModel;
import com.example.reactbackend.service.UserServiceImpl;
import com.example.reactbackend.service.VehicleLocationService;

@RestController
@RequestMapping("/api/v1/user-Management")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class VehicleLocationController {

	@Autowired
	private UserServiceImpl userServiceIml;

	@PostMapping("/create-user")
	public ResponseEntity<UserModel> createNewUser(@RequestBody UserModel user) {
		return ResponseEntity.status(HttpStatus.CREATED).body(userServiceIml.createUser(user));
	}

	@GetMapping("/list-user")
	public ResponseEntity<List<UserModel>> listUserData() {
		return ResponseEntity.ok(userServiceIml.fetchAllVehicleLocations());
	}

	@GetMapping("/find-user/{id}")
	public ResponseEntity<UserModel> fetchVehicleLocationById(@PathVariable("id") Integer id) {
		return ResponseEntity.ok(userServiceIml.fetchVehicleLocationById(id).orElseThrow(
				() -> new VehicleLocationNotFound(String.format("Vehicle Location not found for ID -> %d .", id))));
	}

	@PutMapping("/update-user/{id}")
	public ResponseEntity<UserModel> updateUser(@RequestBody UserModel userModel, @PathVariable(value = "id") int id) {
		return ResponseEntity.status(HttpStatus.OK).body(userServiceIml.updateUser(userModel,id));
	}

	@DeleteMapping("/delete-user/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable("id") Integer id){
		boolean isDeletedUser = userServiceIml.deleteUser(id);
		if(isDeletedUser){
			return ResponseEntity.status(HttpStatus.CREATED).body("User deleted Successfully");
		}
		return ResponseEntity.status(HttpStatus.CREATED).body("Failed to delete the user.");
	}
}
