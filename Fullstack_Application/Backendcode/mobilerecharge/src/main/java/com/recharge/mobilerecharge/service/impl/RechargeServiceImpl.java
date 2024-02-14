package com.recharge.mobilerecharge.service.impl;

import com.recharge.mobilerecharge.model.Recharge;
import com.recharge.mobilerecharge.repository.RechargeRepo;
import com.recharge.mobilerecharge.service.RechargesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class RechargeServiceImpl implements RechargesService {

    @Autowired
    private final RechargeRepo rechargeRepository;

    public RechargeServiceImpl(RechargeRepo rechargeRepository) {
        this.rechargeRepository = rechargeRepository;
    }

    @Override
    public List<Recharge> getRechargesByCustomerId(Long customerId) {
        return rechargeRepository.findByCustomerId(customerId);
    }

    @Override
    public Recharge createRecharge(Recharge recharge) {
        
        // Set the current date as the recharge date
        recharge.setDate(Date.valueOf(LocalDate.now()));

        // Set the status as "success"
        recharge.setStatus("success");

        return rechargeRepository.save(recharge);
    }

    public List<Recharge> getAllRecharges() {
        return rechargeRepository.findAll();
    }
    // Implement additional service methods if needed
}