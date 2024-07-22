package com.example.reactbackend.exceptions;

public class VehicleLocationNotFound extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public VehicleLocationNotFound(String message) {
		super(message);
	}

}
