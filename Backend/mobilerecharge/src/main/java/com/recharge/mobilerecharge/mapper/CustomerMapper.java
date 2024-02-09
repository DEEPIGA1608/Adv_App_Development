package com.recharge.mobilerecharge.mapper;

import com.recharge.mobilerecharge.dto.CustomerDto;
import com.recharge.mobilerecharge.model.Customer;

public class CustomerMapper {

    public static CustomerDto mapToCustomerDto(Customer customer) {
        return new CustomerDto(
                customer.getCustomerId(),
                customer.getCustomerName(),
                customer.getCustomerAddress());
                // customer.getUser());
    }

    public static Customer mapToCustomer(CustomerDto customerDto) {
        return new Customer(
                customerDto.getCustomerId(),
                customerDto.getCustomerName(),
                customerDto.getCustomerAddress());
                // customerDto.getUser());
    }

}