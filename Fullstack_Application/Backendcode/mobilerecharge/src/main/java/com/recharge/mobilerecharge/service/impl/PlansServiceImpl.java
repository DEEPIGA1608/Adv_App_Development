package com.recharge.mobilerecharge.service.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.recharge.mobilerecharge.model.Plans;
import com.recharge.mobilerecharge.repository.PlansRepo;
import com.recharge.mobilerecharge.service.PlanService;

import java.util.List;


@Service
public class PlansServiceImpl implements PlanService {
    @Autowired
    private PlansRepo planRepository;

    @Override
    public List<Plans> getPlanByType(String planType) {
        return planRepository.findByPlanType(planType);
    }
    @Override
    public Plans getPlanById(Long planId) {
        return planRepository.findById(planId).orElse(null);
    }



    @Override
    public void deletePlan(Long id) {
        planRepository.deleteById(id);
    }

    @Override
    public Plans savePlan(Plans e)
	{
		return planRepository.save(e);
	}

    @Override
    public Plans updatePlan(Long id, Plans plan) {
        if (planRepository.existsById(id)) {
            plan.setPlanId(id);
            return planRepository.save(plan);
        }
        return null;
    }
    }