package com.example.reactbackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.reactbackend.exceptions.VehicleLocationNotFound;

@RestControllerAdvice
public class VehicleLocationControllerAdvice {
	
	@ExceptionHandler(VehicleLocationNotFound.class)
	public ResponseEntity<String> vehicleLocationNotFoundHandler(VehicleLocationNotFound ex){
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
	}
}
