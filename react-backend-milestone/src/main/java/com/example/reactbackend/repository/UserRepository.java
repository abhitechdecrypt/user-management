package com.example.reactbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.reactbackend.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Integer> {

}
