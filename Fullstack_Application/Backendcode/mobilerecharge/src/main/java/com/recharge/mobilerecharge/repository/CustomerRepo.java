package com.recharge.mobilerecharge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.recharge.mobilerecharge.model.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {

}
