package com.recharge.mobilerecharge.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.recharge.mobilerecharge.model.Recharge;

public interface RechargeRepo extends JpaRepository<Recharge, Long> 
{
    Optional<Recharge> findById(Long id);
}
