package com.recharge.mobilerecharge.service;

import com.recharge.mobilerecharge.model.Recharge;

import java.util.List;

public interface RechargesService {

    List<Recharge> getRechargesByCustomerId(Long customerId);

     List<Recharge> getAllRecharges();
    Recharge createRecharge(Recharge recharge);

    // Add additional service methods if needed
}