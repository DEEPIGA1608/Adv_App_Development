package com.recharge.mobilerecharge.service;

import com.recharge.mobilerecharge.model.Customer;

import java.util.List;

public interface CustomersService {
    List<Customer> getAllCustomers();

    Customer getCustomerById(Integer id);

    Customer saveCustomer(Customer customer);

    void deleteCustomer(Integer id);
}