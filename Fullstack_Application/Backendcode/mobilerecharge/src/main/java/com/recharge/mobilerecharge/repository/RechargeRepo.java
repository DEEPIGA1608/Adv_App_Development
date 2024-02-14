package com.recharge.mobilerecharge.repository;

import com.recharge.mobilerecharge.model.Recharge;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RechargeRepo extends JpaRepository<Recharge, Long> {

    List<Recharge> findByCustomerId(Long customerId);

    // Add additional query methods if needed
}