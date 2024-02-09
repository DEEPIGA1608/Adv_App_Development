package com.recharge.mobilerecharge.service.impl;

import com.recharge.mobilerecharge.model.Recharge;
import com.recharge.mobilerecharge.repository.RechargeRepo;
import com.recharge.mobilerecharge.service.RechargesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class RechargeServiceImpl implements RechargesService {
    @Autowired
    private RechargeRepo rechargeRepository;
    @Override
    public Recharge saveRecharge(Recharge recharge) {
        return rechargeRepository.save(recharge);
    }

    @Override
    public void deleteRecharge(Long planId) {
        rechargeRepository.deleteById(planId);
    }
    public Recharge updateDetails(Long planId,Recharge e1)
	{
		return rechargeRepository.saveAndFlush(e1);
	}
    // public List<Recharge> getDetails()
	// {
	// 	return rechargeRepository.findAll();
	// }
    @Override
    public Optional<Recharge> getDetailss(Long id) {
		return rechargeRepository.findById(id);
	}
}