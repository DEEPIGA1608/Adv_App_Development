package com.recharge.mobilerecharge.service;

import com.recharge.mobilerecharge.model.Recharge;

import java.util.Optional;
public interface RechargesService {

    Recharge saveRecharge(Recharge recharge);
    Recharge updateDetails(Long planId,Recharge e1);
    void deleteRecharge(Long id);
    // List<Recharge> getDetails();
    Optional<Recharge> getDetailss(Long id);
}