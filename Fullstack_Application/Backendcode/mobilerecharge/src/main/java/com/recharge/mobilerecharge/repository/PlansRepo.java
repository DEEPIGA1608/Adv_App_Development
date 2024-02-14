package com.recharge.mobilerecharge.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.recharge.mobilerecharge.model.Plans;

public interface PlansRepo extends JpaRepository<Plans, Long>{
    List<Plans> findByPlanType(String planType);



}
