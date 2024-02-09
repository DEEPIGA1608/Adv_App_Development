package com.recharge.mobilerecharge.service;

import com.recharge.mobilerecharge.model.Plans;

import java.util.List;

public interface PlanService {
   
  List<Plans> getPlanByType(String planType);
    void deletePlan(Long id);
    Plans updatePlan(Long id, Plans plan);
    Plans savePlan(Plans plan);


    
}
